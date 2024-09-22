import axios from 'axios';
import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import { IncomingForm } from 'formidable'; // Use formidable to handle file uploads

// Disable body parsing to handle file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};

// Replace with your AssemblyAI API key
const apiKey: string = 'd88cea49224e4de99376e8b429f0860d';

// Function to upload the video file to AssemblyAI
const uploadVideo = async (videoFilePath: string): Promise<string> => {
  try {
    const file = fs.createReadStream(videoFilePath);

    const response = await axios.post(
      'https://api.assemblyai.com/v2/upload',
      file,
      {
        headers: {
          authorization: apiKey,
          'Transfer-Encoding': 'chunked'
        }
      }
    );

    return response.data.upload_url; // Return the uploaded file URL
  } catch (error: any) {
    console.error('Error uploading the video:', error.message);
    throw error;
  }
};

// Function to transcribe the uploaded video
const transcribeVideo = async (videoFilePath: string) => {
  try {
    // Step 1: Upload the video and get the URL
    const uploadedVideoUrl = await uploadVideo(videoFilePath);
    console.log('Video uploaded successfully. URL:', uploadedVideoUrl);

    // Step 2: Submit the video URL for transcription
    const response = await axios.post(
      'https://api.assemblyai.com/v2/transcript',
      {
        audio_url: uploadedVideoUrl,
        speaker_labels: true,
        language_code: 'en',
        punctuate: true,
        format_text: true
      },
      {
        headers: {
          authorization: apiKey,
          'Content-Type': 'application/json'
        }
      }
    );

    const transcriptId: string = response.data.id;

    // Step 3: Poll for the transcription result
    let transcriptResult: any;
    while (!transcriptResult || transcriptResult.status !== 'completed') {
      const resultResponse = await axios.get(
        `https://api.assemblyai.com/v2/transcript/${transcriptId}`,
        {
          headers: { authorization: apiKey }
        }
      );
      transcriptResult = resultResponse.data;

      if (transcriptResult.status === 'failed') {
        throw new Error('Transcription failed: ' + transcriptResult.error);
      }

      // Poll every 5 seconds
      await new Promise((resolve) => setTimeout(resolve, 5000));
    }

    // Step 4: Return the transcript
    return transcriptResult.text;
  } catch (error: any) {
    console.error('Error in transcription process:', error.message);
    throw error;
  }
};

// API Route handler for Next.js
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const form = new IncomingForm();

  // Parse the form data (to handle the file)
  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Error parsing form data:', err);
      return res.status(500).json({ error: 'Failed to parse form data' });
    }

    try {
      const videoFilePath = (files.video as any).filepath; // Extract file path from uploaded video

      if (!videoFilePath) {
        return res.status(400).json({ error: 'Video file path is required' });
      }

      const transcript = await transcribeVideo(videoFilePath);
      return res.status(200).json({ transcript });
    } catch (error: any) {
      console.error('Error in transcription process:', error.message);
      return res.status(500).json({ error: 'Error in transcription process: ' + error.message });
    }
  });
}
