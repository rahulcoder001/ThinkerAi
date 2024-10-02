"use client"
import styles from "./prompt.module.css";
import axios from "axios";
import Navbar from "../../../Rootcomponent/Navbar/page";
import { useState } from "react";
import Image from "next/image";
const Page = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [prompt,SetPrompt]=useState('');
  const [vi,SetVid]=useState(false);
  const[response,SetResponse]=useState('');
  const [pdfurl, setPdfurl] = useState('');
  const [loading, setLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const audioUrl1 = '/output.mp3';
  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
   if (event.target.files && event.target.files.length > 0) {
     const file = event.target.files[0];
     setSelectedFile(file);
     handleUpload(file); // Pass the file directly to handleUpload
   }
 };
 
 const handleUpload = async (file: File) => {
  SetVid(true);
   if (!file) {
     setErrorMessage('Please select a file to upload.');
     return;
   }
   setLoading(true);
   
   try {
     setIsUploading(true);
     setErrorMessage(null);
 
     const formData = new FormData();
     formData.append('file', file);
 
     // Send the file to the backend API for transcription
     const response = await axios.post('/api/trans/videoToText', formData, {
       headers: {
         'Content-Type': 'multipart/form-data',
       },
     });
 
     // Log the entire response to debug the issue
     console.log('API Response:', response);
 
     // If the response has valid data, update the transcript
     if (response.data && typeof response.data.transcript === 'string') {
       SetResponse(response.data.transcript + response.data.speakerTranscript);
     } else {
       setErrorMessage('Transcription failed. Invalid response from the server.');
     }
 
   } catch (error: any) {
     console.error('Error uploading file:', error.message);
     setErrorMessage('Error uploading the file. Please try again.');
   } finally {
     setIsUploading(false);
     setLoading(false);
   }
 };
 
 

  const handlesendmessage= async()=>{
   if (!prompt) return;
   setLoading(true);
   try{
     const res = await fetch('/api/trans/translate', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       // Correct string interpolation
       body: JSON.stringify({ prompt: `${prompt} ` }),
     });
     const data = await res.json();
     SetResponse(data.content);
     setPdfurl(data.pdfUrl);
     const audioRes = await fetch('/api/trans/textToSpeech', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({ text: data.content }), // Sending translated text for TTS
     }); 
     const audioData = await audioRes.json();
     setAudioUrl(audioData.audioUrl);
   
   
   
   }catch(err){
   console.log('Error fetching translation or audio',err);
   } finally {
     setLoading(false);
   }
  }
  return (
    <main className="bg-custom-gradient bg-custom-size bg-no-repeat w-full h-screen bg-black">
      <Navbar/>
      <div className="w-full h-screen flex flex-col justify-center items-center ">

        {/* top */}
        {loading?(
          <div className="h-[50vh] bg-[#1a1a1a] w-[50vw] text-white ">
            Loading...
          </div>
        ):(
          response
        )?(
          <div className="mt-5 h-[60vh] bg-[#1a1a1a] w-[80vw] rounded-lg overflow-y-auto ">
  <h1 className="text-white text-[1.2vw] m-4">{response}</h1>
  
  <div className="mt-4 m-4">
    <a href={pdfurl} download className={styles.downloadButton}>
      Download PDF
    </a>
    <a href={audioUrl1} download className={styles.downloadButton} style={{ marginLeft: '1rem' }}>
      Download Audio
    </a>
  </div>
</div>
        ):(
          <>
           <div className=" m-3  ">
           <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-700 to-pink-500 font-extrabold text-4xl">
            Hi There,John <br />
            What Would You like to know?
           </h1>
           <div className="text-gray-300 text-lg m-3">
            Use one of the most common prompts <br />
             below or use your own to begin 
           </div>
           <div className="flex flex-row justify-between m-4">
           <div className="w-auto h-32 flex border-white border-2 m-2 rounded-2xl relative">
  <div className="text-white m-2 text-xs">
    Write a to-do list for a <br /> personal project or task
  </div>
  <img
    src="/boy.png"
    alt="loading-image"
    className="absolute bottom-0 left-0 m-2"
    style={{
      filter: 'invert(1)',
      height: '5vh',
    }}
  />
</div>
         <div className="w-auto h-32 flex border-white border-2 m-2 rounded-2xl relative">
          <div className="text-white m-2 text-xs ">
            Summarize this article or<br /> text-for me in one <br /> paragraph
          </div>
          <img
    src="/chat.png"
    alt="loading-image"
    className="absolute bottom-0 left-0 m-2"
    style={{
      filter: 'invert(1)',
      height: '5vh',
    }}
  />
         </div>
         <div className="w-auto h-32 flex border-white border-2 m-2 rounded-2xl relative">
          <div className="text-white m-2 text-xs">
           Generate an email or reply <br /> to a job offer
          </div>
          <img
    src="/email.png"
    alt="loading-image"
    className="absolute bottom-0 left-0 m-2"
    style={{
      filter: 'invert(1)',
      height: '5vh',
    }}
  />
         </div>
         <div className="w-auto h-32 flex border-white border-2 m-2 rounded-2xl relative">
          <div className="text-white m-2 text-xs">
           How does AI work in a <br />technical capacity
          </div>
          <img
    src="/cpu.png"
    alt="loading-image"
    className="absolute bottom-0 left-0 m-2"
    style={{
      filter: 'invert(1)',
      height: '5vh',
    }}
  />
         </div>
         </div>
        </div>
          </>
        )}
       
        <div className="w-[50vw] text-black outline-none m-4 p-4  flex flex-col">
 

  {/* Upload Video Section */}
  <div className="flex flex-row">

  
  <div className="flex items-center mt-4">
    <label className="flex items-center cursor-pointer">
      <input type="file" accept="video/mp4" className="hidden" onChange={handleFileChange} />
      <span className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition">
        Get Text from Video
      </span>
    </label>
  </div>
  <div className="flex items-center mt-4 ml-5">
    <label className="flex items-center cursor-pointer">
      <input type="file" accept="video/mp4" className="hidden" onChange={handleFileChange} />
      <span className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition">
       Upload Video
      </span>
    </label>
  </div>
  {/* New Button at the Bottom Right */}
  <div className="mt-auto flex ml-auto justify-end">
  <button className="py-2 px-4 transition " onClick={handlesendmessage}>
  <img src="/right.png" alt="right-arrow" className="h-[3vh] " />
</button>
  </div>
  </div>
</div>
      </div>
      
    </main>
  );
};

export default Page;