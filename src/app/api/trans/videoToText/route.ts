import { NextResponse } from 'next/server';
import axios from 'axios';
import fs from 'fs';
import path from 'path'; // Import path module for handling file paths

// Disable body parsing to handle file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};

// Replace with your AssemblyAI API key
const apiKey: string = '45cd511961cc49359f041d18cabad590';

// Function to upload the video file to AssemblyAI
const uploadVideo = async (fileBuffer: Buffer): Promise<string> => {
  try {
    const response = await axios.post(
      'https://api.assemblyai.com/v2/upload',
      fileBuffer,
      {
        headers: {
          authorization: apiKey,
          'Content-Type': 'application/octet-stream',
          'Transfer-Encoding': 'chunked',
        },
      }
    );

    return response.data.upload_url; // Return the uploaded file URL
  } catch (error: any) {
    console.error('Error uploading the video:', error.message);
    throw new Error('Failed to upload video: ' + error.message);
  }
};

// Function to transcribe the uploaded video
const transcribeVideo = async (uploadedVideoUrl: string) => {
  try {
    const response = await axios.post(
      'https://api.assemblyai.com/v2/transcript',
      {
        audio_url: uploadedVideoUrl,
        speaker_labels: true,
        language_code: 'en',
        punctuate: true,
        format_text: true,
      },
      {
        headers: {
          authorization: apiKey,
          'Content-Type': 'application/json',
        },
      }
    );

    const transcriptId: string = response.data.id;

    // Poll for the transcription result
    let transcriptResult: any;
    while (!transcriptResult || transcriptResult.status !== 'completed') {
      const resultResponse = await axios.get(
        `https://api.assemblyai.com/v2/transcript/${transcriptId}`,
        {
          headers: { authorization: apiKey },
        }
      );
      transcriptResult = resultResponse.data;

      if (transcriptResult.status === 'failed') {
        throw new Error('Transcription failed: ' + transcriptResult.error);
      }

      // Poll every 5 seconds
      await new Promise((resolve) => setTimeout(resolve, 5000));
    }

    const transcript = transcriptResult.text;
    let speakerTranscript = transcript;

    if (transcriptResult.utterances) {
      speakerTranscript = transcriptResult.utterances
      
        .map((utterance: any) => `Speaker ${utterance.speaker}: ${utterance.text}`)
        .join('\n');
    }

    return {
      transcript,
      speakerTranscript,
    };
  } catch (error: any) {
    console.error('Error in transcription process:', error.message);
    throw new Error('Transcription failed: ' + error.message);
  }
};

// Function to convert a .txt file to Base64
function fileToBase64(filePath: string) {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  return Buffer.from(fileContent).toString('base64');
}

// Function to convert the .txt file to a PDF using ConvertAPI
async function convertTxtToPdf(filePath: string) {
  const base64File = fileToBase64(filePath);

  const postData = {
    Parameters: [
      {
        Name: 'File',
        FileValue: {
          Name: 'content.txt',
          Data: base64File,
        },
      },
      {
        Name: 'StoreFile',
        Value: true,
      },
    ],
  };

  try {
    const response = await axios.post(
      'https://v2.convertapi.com/convert/txt/to/pdf?Secret=secret_844ni9Tzule1MdJG',
      postData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.data && response.data.Files && response.data.Files[0].Url) {
      return response.data.Files[0].Url;
    } else {
      throw new Error('PDF URL not found in the response');
    }
  } catch (error: any) {
    console.error('Error converting TXT to PDF:', error.message || error);
    throw new Error('PDF conversion failed: ' + error.message);
  }
}

// API Route handler for Next.js
export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const fileBuffer = Buffer.from(await file.arrayBuffer());

    // Step 1: Upload the video and get the URL
    const uploadedVideoUrl = await uploadVideo(fileBuffer);

    // Step 2: Transcribe the uploaded video
    const transcriptionResult = await transcribeVideo(uploadedVideoUrl);
    
    // Step 3: Convert transcription text to TXT file and then to PDF
    const transcriptionText = transcriptionResult.transcript; // Get raw transcript
    const txtFilePath = path.join(process.cwd(), 'content.txt'); // Define path for TXT file in the current working directory

    // Write the transcription text to a TXT file
    fs.writeFileSync(txtFilePath, transcriptionText, 'utf8');

    // Convert the TXT file to PDF
    const pdfUrl = await convertTxtToPdf(txtFilePath);

    // Clean up the TXT file if needed
    // fs.unlinkSync(txtFilePath); // Uncomment if you want to delete the TXT file after converting to PDF

    // Return both the PDF URL and the transcription text
    return NextResponse.json({
      transcript: transcriptionText,
      pdfUrl,
      speakerTranscript: transcriptionResult.speakerTranscript, // Include speaker-labeled transcript if needed
    });
  } catch (error: any) {
    console.error('Error in transcription process:', error.message);
    return NextResponse.json({ error: 'Error in transcription process: ' + error.message }, { status: 500 });
  }
}