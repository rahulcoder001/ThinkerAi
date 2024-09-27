"use client"

import Image from 'next/image';
import icon from "../../images/icon.svg";
import React, { useState } from 'react';
import ai from "../../images/ai.png"
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import note from "../../images/note.png"
import multimedia from '../../images/multimedia.png'
import audio from '../../images/audio.png'
import ppt from "../../images/ppt.png"
import Navbar from '../../../Rootcomponent/Navbar/page';
import styles from './edubotix.module.css'

const Page = () => {
  const[detail,setDetail]=useState(false);
  const[video,setVideo]=useState(false);

  const handledetail=()=>{
    setDetail(!detail);
  }
  const handlevideo=()=>{
    setVideo(!video);
  }
  return (
    <main className={styles.maincontent} style={{backgroundColor:'black'}}  >
      <Navbar/>
      <div className="h-screen  bg-gradient-to-b  flex flex-col  items-center pt-16"> {/* Added padding-top */}
        <div className="inline-flex items-center bg-black text-white px-3 py-2 m-4 rounded-3xl">
          <Image src={icon} alt="icon" width={24} height={24} className="mr-2" />
          <span className='font-poppins'>Model Serving Your Way</span>
        </div>
        <div className="flex flex-col items-center text-center mb-8"> {/* Added margin-bottom */}
          <h1 className='text-4xl font-bold font-poppins'>
            From Idea to Impact
          </h1>
          <h1 className='text-4xl font-bold font-poppins mt-2'>
            Design Courses That Make a Difference!
          </h1>
        </div>

        <div className='flex w-screen h-auto justify-between flex-wrap p-5 font-poppins'>
  {/* Card 1 */}
  <div className="w-[30%] bg-white shadow-2xl border-orange-100 rounded-lg p-4 m-4 ">
  <Image src={icon} alt="Icon 1" className="w-full h-48 object-cover rounded-t-lg" />
  <h3 className="font-bold text-xl mt-2 font-poppins">
    Unlocking Knowledge: The Power of Detailed Descriptions
  </h3>
  <ul className="text-gray-700 text-base mt-2 list-disc list-inside ">
    <li>Gain a comprehensive understanding of complex topics.</li>
    <li>Enhance retention and recall through in-depth analysis.</li>
    <li>Cater to different learning styles with rich content.</li>
    <li>Build a solid foundation for future learning and application.</li>
  </ul>
</div>

  {/* Card 2 */}
  <div className="w-[30%] bg-white shadow-2xl rounded-lg p-4 m-4">
    <Image src={icon} alt="Icon 2" className="w-full h-48 object-cover rounded-t-lg" />
    <h3 className="font-bold text-xl mt-2"> The Convenience of PDFs
    </h3>
    <div className="text-gray-700 text-base mt-2">
    <li> Easy to download and access anytime, anywhere.</li>
        <li> Printable format for offline study and annotation.</li>
        <li> Organized layout makes it simple to navigate key points.</li>
        <li> Searchable text allows quick reference to specific information.</li>
    </div>
  </div>

  {/* Card 3 */}
  <div className="w-[30%] bg-white shadow-2xl rounded-lg p-4 m-4">
    <Image src={icon} alt="Icon 3" className="w-full h-48 object-cover rounded-t-lg" />
    <h3 className="font-bold text-xl mt-2"> Learning on the Go: The Benefits of Audio
    </h3>
    <div className="text-gray-700 text-base mt-2">
    <li> Listen while commuting, exercising, or multitasking.</li>
        <li> Engaging auditory learning experience enhances comprehension.</li>
        <li> Suitable for auditory learners who absorb information better through sound.</li>
        <li> Reinforces learning through repeated listening for deeper understanding.</li>

    </div>
  </div>
</div>

<div className='flex w-screen h-auto justify-between flex-wrap p-5 font-poppins'>
  {/* Card 1 */}
  <div className="w-[30%] bg-white shadow-2xl border-orange-100 rounded-lg p-4 m-4 ">
  <Image src={icon} alt="Icon 1" className="w-full h-48 object-cover rounded-t-lg" />
  <h3 className="font-bold text-xl mt-2 font-poppins">
  Visual Learning: The Impact of Video
  </h3>
  <ul className="text-gray-700 text-base mt-2 list-disc list-inside ">
  <li> Dynamic presentations bring topics to life with visuals and animations.</li>
        <li> Engaging storytelling captures attention and maintains interest.</li>
        <li> Facilitates understanding of complex concepts through demonstrations.</li>
        <li> Accessible for visual learners, combining audio and visual stimuli.</li>

  </ul>
</div>

  {/* Card 2 */}
  <div className="w-[30%] bg-white shadow-2xl rounded-lg p-4 m-4">
    <Image src={icon} alt="Icon 2" className="w-full h-48 object-cover rounded-t-lg" />
    <h3 className="font-bold text-xl mt-2"> PowerPoint: A Structured Approach to Learning

    </h3>
    <div className="text-gray-700 text-base mt-2">
    <li> Visually appealing format enhances engagement and retention.</li>
        <li> Easy to highlight key concepts and takeaways.</li>
        <li> Perfect for summarizing content for presentations or group discussions.</li>
        <li> Flexible for both individual study and collaborative learning environments.</li>

    </div>
  </div>

  {/* Card 3 */}
  <div className="w-[30%] bg-white shadow-2xl rounded-lg p-4 m-4">
    <Image src={icon} alt="Icon 3" className="w-full h-48 object-cover rounded-t-lg" />
    <h3 className="font-bold text-xl mt-2"> Extracting Insights: Text from Video Content

    </h3>
    <div className="text-gray-700 text-base mt-2">
    <li> Quick reference for key points discussed in the video.</li>
        <li> Helps reinforce learning through written summaries.</li>
        <li> Ideal for creating notes and study materials efficiently.</li>
        <li> Assists in retaining information by reviewing text alongside video.</li>


    </div>
  </div>
</div>
       
<div className="flex items-center justify-center py-10 bg-white mt-4">
      {/* Left Arrow Icons */}
      <div className="flex items-center space-x-2">
        {/* Sequential glowing effect with delay */}
       
        <ChevronRightIcon className="h-6 w-6 text-red-500 animate-glow delay-[0.1s]" />
        <ChevronRightIcon className="h-6 w-6 text-red-500 animate-glow delay-[0.2s]" />
        <ChevronRightIcon className="h-6 w-6 text-red-500 animate-glow delay-[0.3s]" />
        <ChevronRightIcon className="h-6 w-6 text-red-500 animate-glow delay-[0.4s]" />
        <ChevronRightIcon className="h-6 w-6 text-red-500 animate-glow delay-[0.5s]" />
      </div>

      {/* Main Content */}
      <div className="text-center px-10">
        <h2 className="text-4xl font-bold text-black font-poppins">Experience it now</h2>
        <p className="mt-2 text-gray-500 font-poppins">
        Discover the future of learning with interactive, hands-on tools designed to enhance your course creation journey
        </p>
      </div>

      {/* Right Arrow Icons */}
      <div className="flex items-center space-x-2">
        {/* Sequential glowing effect with delay */}
        <ChevronLeftIcon className="h-6 w-6 text-red-500 animate-glow delay-[0.1s]" />
        <ChevronLeftIcon className="h-6 w-6 text-red-500 animate-glow delay-[0.2s]" />
        <ChevronLeftIcon className="h-6 w-6 text-red-500 animate-glow delay-[0.3s]" />
        <ChevronLeftIcon className="h-6 w-6 text-red-500 animate-glow delay-[0.4s]" />
        <ChevronLeftIcon className="h-6 w-6 text-red-500 animate-glow delay-[0.5s]" />
      </div>
    </div>
    <div className='w-full h-auto'>
  <div className="flex items-center flex-col justify-center w-full p-5 m-5  h-auto  rounded-xl">
    <div className=" bg-gradient-to-b  from-blue-100 to-green-50 rounded-full flex flex-col items-center justify-center mt-12" style={{
      height:'15rem',
      width:'15rem'
    }}>
      {/* Centering the image */}
      <Image src={ai} alt='ai' className='h-16 w-16' />
      <div className='font-poppins text-1xl font-bold mt-2 text-black'>
        Discover the AI Realm
      </div>
    </div>
    <div className='flex flex-wrap justify-center space-x-5'>
  <button className='flex items-center border-2 border-gray-200 rounded-xl p-3 m-3 hover:bg-gray-100 transition ease-in-out duration-200' onClick={handledetail}>
    <Image src={note} alt='text' className='h-10 w-10' />
    <p className='font-poppins ml-4 font-medium' style={{
      fontSize:'1rem'
    }}>Generate detailed description</p>
  </button>

  <button className='flex items-center border-2 border-gray-200 rounded-xl p-3 m-3 hover:bg-gray-100 transition ease-in-out duration-200 ' onClick={handlevideo}>
    <Image src={multimedia} alt='text' className='h-10 w-10' />
    <p className='font-poppins ml-4 font-medium' style={{
      fontSize:'1rem'
    }}>Get Text from video</p>
  </button>
</div>

<div className='flex flex-wrap justify-center space-x-5'>
  <button className='flex items-center border-2 border-gray-200 rounded-xl p-3 m-3 hover:bg-gray-100 transition ease-in-out duration-200'>
    <Image src={audio} alt='text' className='h-10 w-10' />
    <p className='font-poppins ml-4 text-xl font-medium' style={{
      fontSize:'1rem'
    }}>Generate audio from Text</p>
  </button>

  <button className='flex items-center border-2 border-gray-200 rounded-xl p-3 m-3 hover:bg-gray-100 transition ease-in-out duration-200'>
    <Image src={ppt} alt='text' className='h-10 w-10' />
    <p className='font-poppins ml-4 text-xl font-medium' style={{
      fontSize:'1rem'
    }}>Generate ppt from text</p>
  </button>
</div>
{detail && (
  <div className='m-5 flex w-screen'>
    {/* Search bar: Longer width */}
    <input
      type="text"
      className='m-5 border-2 bg-gray-100 border-gray-300 outline-none rounded-xl font-poppins h-14 w-[80%] px-4'
      placeholder="Write a message here..."
    />
    
    {/* Language input: Smaller width */}
    <input
      type="text"
      placeholder="Language"
      className='m-5 border-2 bg-gray-100 border-gray-300 outline-none rounded-xl font-poppins h-14 w-[20%] px-4'
    />
  </div>
)}

{video && (
  <div className='m-5 font-poppins w-[50%]'>
    {/* Hidden file input */}
    <input
      id="file-upload"
      type="file"
      className="hidden"
      accept=".mp4"
    />

    {/* Custom styled label */}
    <label
      htmlFor="file-upload"
      className='border-2 border-gray-300 outline-none rounded-xl font-poppins h-14 w-full px-4 flex items-center justify-center cursor-pointer bg-white hover:bg-blue-200 transition duration-200'
    >
      Upload Video (.mp4)
    </label>
  </div>
)}


  </div>
</div>
   


      </div>
   
    </main>
  );
};

export default Page;
