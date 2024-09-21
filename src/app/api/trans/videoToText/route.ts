// src/app/api/trans/videoTranscription/route.ts
import axios from 'axios';
import fs from 'fs';
import { NextResponse } from 'next/server';

// Replace with your AssemblyAI API key
const apiKey: string = 'd88cea49224e4de99376e8b429f0860d';

// Function to upload the video file
const uploadVideo = async (videoFilePath: string): Promise<string> => {
  try {
    const file = fs.createReadStream(videoFilePath);
    
    const response = await axios.post(
      'https://api.assemblyai.com/v2/upload',
      file,
      {
        headers: {
          authorization: apiKey,
          'Transfer-Encoding': 'chunked',
        },
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

    // Step 3: Poll for the transcription result
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

    // Step 4: Build the final response with speaker diarization
    const transcript = transcriptResult.text;
    let speakerTranscript = transcript; // In case no speaker diarization is found

    if (transcriptResult.utterances) {
      // Combine the utterances for a structured speaker-labeled transcript
      speakerTranscript = transcriptResult.utterances
        .map((utterance: any) => `Speaker ${utterance.speaker}: ${utterance.text}`)
        .join('\n');
    }

    return {
      transcript, // The raw transcript without speaker labels
      speakerTranscript, // The transcript with speaker labels
    };
  } catch (error: any) {
    console.error('Error in transcription process:', error.message);
    throw error;
  }
};

// API Route handler for Next.js
export async function POST(req: Request) {
  try {
    // Log the request body for debugging
    const body = await req.json();
    console.log('Request body:', body);

    const { videoFilePath } = body; // Get video file path from request body

    if (!videoFilePath) {
      return NextResponse.json({ error: 'Video file path is required' }, { status: 400 });
    }

    const transcriptionResult = await transcribeVideo(videoFilePath);
    return NextResponse.json(transcriptionResult); // Return the full transcription result
  } catch (error: any) {
    console.error('Error in transcription process:', error.message);
    return NextResponse.json({ error: 'Error in transcription process: ' + error.message }, { status: 500 });
  }
}
