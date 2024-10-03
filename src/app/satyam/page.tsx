"use client"
import styles from "./prompt.module.css";
import axios from "axios";
import Navbar from "../../../Rootcomponent/Navbar/page";
import { useState } from "react";
import Image from "next/image";
const Page = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [prompt,SetPrompt]=useState('');
  const [lang,SetLang]=useState('English');
  const[response,SetResponse]=useState('');
  const [pdfurl, setPdfurl] = useState('');
  const [loading, setLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const audioUrl1 = '/output.mp3';
  const [videolink , setvideoLink] = useState(null);
  
 
 

 
 

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
       body: JSON.stringify({ prompt: `${prompt} in ${lang}` }),
     });
     const data = await res.json();
     SetResponse(data.content);
    //  getvideo(data.content);
     setPdfurl(data.pdfUrl);
    //  const audioRes = await fetch('/api/trans/textToSpeech', {
    //    method: 'POST',
    //    headers: {
    //      'Content-Type': 'application/json',
    //    },
    //    body: JSON.stringify({ text: data.content }), // Sending translated text for TTS
    //  }); 
    //  const audioData = await audioRes.json();
    //  setAudioUrl(audioData.audioUrl);
   }catch(err){
   console.log('Error fetching translation or audio',err);
   } finally {
     setLoading(false);
   }
  }
//  async function getvideo(res:string){
//       const resforvideo = await axios.post("/api/trans/textToVideo",{customScript : res})
//       setvideoLink(resforvideo.data.videoStatus);

//   }
  return (
    <main className="bg-custom-gradient bg-custom-size bg-no-repeat w-full h-screen bg-black">
      <Navbar/>
      <div className="w-full h-screen flex flex-col justify-center items-center ">

        {/* top */}
        {loading?(
          <div className="h-[50vh] bg-[#1a1a1a] w-[50vw] text-white">
            Loading...
          </div>
        ):(
          response
        )?(
          <div className="mt-5 h-[60vh] bg-[#1a1a1a] w-[80vw] rounded-lg overflow-y-auto ">
  <h1 className="text-white text-[1.2vw] m-4">{response}</h1>
  <div className="mt-4 m-4 gap-3">
    <a href={pdfurl} download className={styles.downloadButton}>
      Download PDF
    </a>
    {/* <a href={audioUrl1} download className={styles.downloadButton} style={{ marginLeft: '1rem' }}>
      Download Audio
    </a> */}
    {/* {videolink === null ? (
  <div className="text-white text-xl">Generating video...</div>
) : (
  videolink && <a href={videolink} download className={styles.downloadButton}> Download video</a> // Show the video link or status here when available
)} */}
  </div>
</div>
        ):(
          <>
           <div className=" m-3  ">
           <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-700 to-pink-500 font-extrabold text-4xl mt-10">
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
       
        <div className="w-[50vw] bg-white rounded-2xl text-black outline-none m-4 p-4 shadow-lg flex flex-col">
  <textarea
    className="bg-white text-black w-full outline-none resize-none overflow-y-auto h-30" // Adjusted height to h-30
    placeholder="Ask whatever you want ...."
    rows={3} // Sets the initial height of the textarea
    onChange={(e) => SetPrompt(e.target.value)}
  />

  {/* Upload Video Section */}
  <div className="flex flex-row">

  
  <div>
    <input onChange={(e)=>{SetLang(e.target.value)}} type="text" placeholder="Enter language" className="border-2 rounded-lg p-1"/>
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
