import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

// Initialize the Google Generative AI API
const genAI = new GoogleGenerativeAI("AIzaSyCpVhgjjA0n3l-H1bVQvVSC6kG24P2Wwm0");

// Function to generate formatted content with headings and subheadings
async function generateFormattedContent(prompt: string) {
  try {
    const formattedPrompt = `
      Please generate content on the following topic in a structured format:
      - Use headings  then subheadings then contents do dont use any # or * or any special characters
      Topic: ${prompt}
    `;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(formattedPrompt);

    const contentParts = result?.response?.candidates[0]?.content?.parts;
    if (!contentParts || contentParts.length === 0) {
      throw new Error("No text content available in the response.");
    }

    const formattedContent = contentParts.map(part => part.text).join("\n");

    const currentDir = path.resolve();
    const textFilePath = path.join(currentDir, 'generated_content.txt');

    fs.writeFileSync(textFilePath, formattedContent, 'utf8');
    console.log('Pre-formatted content saved to generated_content.txt!');

    const pdfUrl = await convertTxtToPdf(textFilePath);
    console.log('PDF URL:', pdfUrl);

    return { content: formattedContent, pdfUrl };
  } catch (error) {
    console.error("Error generating formatted content:", error.message || error);
    return { error: "An error occurred while generating content." };
  }
}

// Function to convert a .txt file to Base64
function fileToBase64(filePath: string) {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  return Buffer.from(fileContent).toString('base64');
}

// Function to convert the .txt file to a PDF using ConvertAPI
async function convertTxtToPdf(filePath: string) {
  const base64File = fileToBase64(filePath);

  const postData = {
    "Parameters": [
      {
        "Name": "File",
        "FileValue": {
          "Name": "generated_content.txt",
          "Data": base64File
        }
      },
      {
        "Name": "StoreFile",
        "Value": true
      }
    ]
  };

  try {
    const response = await axios.post('https://v2.convertapi.com/convert/txt/to/pdf?Secret=secret_844ni9Tzule1MdJG', postData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.data && response.data.Files && response.data.Files[0].Url) {
      return response.data.Files[0].Url;
    } else {
      throw new Error('PDF URL not found in the response');
    }
  } catch (error:any) {
    console.error('Error converting TXT to PDF:', error.message || error);
    return null;
  }
}

// Export async function POST with Next.js 14 NextRequest and NextResponse
export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json(); // Parse JSON from request body

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    const result = await generateFormattedContent(prompt);

    if (result.error) {
      return NextResponse.json({ error: result.error }, { status: 500 });
    }

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
