// app/api/ppt-generate/route.js
import axios from 'axios';

// API Endpoint, API Key, and Bearer Token Configuration
const API_KEY = 'NTI5OTBhYjlkMjFiNGFkZWFmOGRkN2M3Zjk3YThiZmMtMTcyNjY1MzAwOQ=='; // Replace with your actual API key
const BEARER_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic2F0eWFtbWF1cnlhOTYyMEBnbWFpbC5jb20iLCJuYmYiOiIxNzI2NzQwMDk3IiwiZXhwIjoiMTczMTkyNDA5NyJ9.nqI0_7z5NGjI_J-B9KsQbhjgLv2oI8iNZoRG4PUONjg'; // Replace with your actual Bearer Token
const GENERATE_URL = 'https://gen.powerpointgeneratorapi.com/v1.0/generator/create';


export async function POST(request) {
  try {
    // Extracting data from the request body
    const requestBody = await request.json();
    console.log("Request Body:", JSON.stringify(requestBody, null, 2)); // Log the entire request body

    // Sending the request to the PowerPoint generator API
    const response = await axios.post(GENERATE_URL, requestBody, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
        'Authorization': `Bearer ${BEARER_TOKEN}` 
      },
    });

    // Logging the full response
    console.log("Response Status:", response.status); // Log response status
    console.log("Response Data:", JSON.stringify(response.data, null, 2)); // Log response data

    
    return new Response(JSON.stringify(response.data), {
      status: response.status,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    // Enhanced error logging
    console.error('Error generating PPT:', error.message || error);

    // Log the error response from the external API if available
    if (error.response) {
      console.error('Error Response Status:', error.response.status);
      console.error('Error Response Data:', JSON.stringify(error.response.data, null, 2));
    }

    return new Response(
      JSON.stringify({ error: 'Error generating PowerPoint presentation' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
