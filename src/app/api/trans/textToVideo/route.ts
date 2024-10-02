import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const API_KEY = '3b2931f60f0340ed8e6210850bca8a65'; // Your API key
const replicaId = 'r79e1c033f'; // Existing replica ID
// const customScript = "A magnetic field is a force field created by moving electric charges or magnetic materials, characterized by poles, flux, attraction, repulsion, and its influence on current and induction."; // Your script

// Function to generate video with custom script
export async function POST(request: NextRequest) {
  try {
    const { customScript } = await request.json();
    const response = await axios.post('https://tavusapi.com/v2/videos', {
      replica_id: replicaId,
      script: customScript
    }, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY
      }
    });

    const videoId = response.data.video_id;
    console.log('Video generation started, video ID:', videoId);

    // Start checking the video status
    const videoStatus = await checkVideoStatus(videoId);

    return NextResponse.json({ message: 'Video generation started', videoStatus: videoStatus.download_url });
  } catch (error:any) {
    console.error('Error generating video:', error.response ? error.response.data : error.message);
    return NextResponse.json({ message: 'Error generating video', error: error.message }, { status: 500 });
  }
}

// Function to check video status
const checkVideoStatus = async (videoId: string) => {
  const checkInterval = 5000; // Check every 5 seconds
  let status = 'queued';

  // Polling for status
  while (status !== 'completed' && status !== 'failed') {
    try {
      const response = await axios.get(`https://tavusapi.com/v2/videos/${videoId}`, {
        headers: {
          "x-api-key": API_KEY
        }
      });

      status = response.data.status;
      console.log('Current video status:', status);

      if (status === 'ready') {
        console.log('Video is completed!', response.data);
        return response.data;
      } else if (status === 'failed') {
        console.error('Video generation failed:', response.data);
        throw new Error('Video generation failed');
      }
    } catch (error:any) {
      console.error('Error fetching video status:', error.response ? error.response.data : error.message);
      throw new Error('Error fetching video status');
    }

    await new Promise(resolve => setTimeout(resolve, checkInterval)); // Wait before checking again
  }
};
