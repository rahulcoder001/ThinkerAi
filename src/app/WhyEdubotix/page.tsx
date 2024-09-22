import Navbar from '@/pages/Navbar/Navbar';
import Image from 'next/image';
import icon from "../../images/icon.svg";
import React from 'react';
import ai from "../../images/ai.png"
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import note from "../../images/note.png"

const Page = () => {
  return (
    <main>
      <Navbar />
      <div className="h-screen w-screen bg-gradient-to-b from-orange-100 to-white flex flex-col  items-center pt-16"> {/* Added padding-top */}
        <div className="inline-flex items-center bg-black text-white px-3 py-2 m-4 rounded-3xl">
          <Image src={icon} alt="icon" width={24} height={24} className="mr-2" />
          <span className='font-poppins'>Model Serving Your Way</span>
        </div>
        <div className="flex flex-col items-center text-center mb-8"> {/* Added margin-bottom */}
          <h1 className='text-5xl font-bold font-poppins'>
            From Idea to Impact
          </h1>
          <h1 className='text-5xl font-bold font-poppins mt-2'>
            Design Courses That Make a Difference!
          </h1>
        </div>
        <div className="flex flex-wrap justify-between mt-5 mx-auto">
  <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4">
    <Image
      className="w-full h-48 object-cover rounded-t-lg" // rounded-t-lg for top-rounded corners
      src={icon}
      alt="Sunset in the mountains"
      layout="responsive"
      width={500}
      height={300}
    />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2 font-poppins">
        Unlocking Knowledge: The Power of Detailed Descriptions
      </div>
      <p className="text-gray-700 text-base font-poppins">
        <li> Gain a comprehensive understanding of complex topics.</li>
        <li> Enhance retention and recall through in-depth analysis.</li>
        <li> Cater to different learning styles with rich content.</li>
        <li> Build a solid foundation for future learning and application.</li>
      </p>
    </div>
  </div>

  <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4">
    <Image
      className="w-full h-48 object-cover rounded-t-lg"
      src={icon}
      alt="Sunset in the mountains"
      layout="responsive"
      width={500}
      height={300}
    />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2 font-poppins">
        The Convenience of PDFs
      </div>
      <p className="text-gray-700 text-base font-poppins">
        <li> Easy to download and access anytime, anywhere.</li>
        <li> Printable format for offline study and annotation.</li>
        <li> Organized layout makes it simple to navigate key points.</li>
        <li> Searchable text allows quick reference to specific information.</li>
      </p>
    </div>
  </div>

  <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4">
    <Image
      className="w-full h-48 object-cover rounded-t-lg"
      src={icon}
      alt="Sunset in the mountains"
      layout="responsive"
      width={500}
      height={300}
    />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2 font-poppins">
        Learning on the Go: The Benefits of Audio
      </div>
      <p className="text-gray-700 text-base font-poppins">
        <li> Listen while commuting, exercising, or multitasking.</li>
        <li> Engaging auditory learning experience enhances comprehension.</li>
        <li> Suitable for auditory learners who absorb information better through sound.</li>
        <li> Reinforces learning through repeated listening for deeper understanding.</li>
      </p>
    </div>
  </div>

  <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4">
    <Image
      className="w-full h-48 object-cover rounded-t-lg"
      src={icon}
      alt="Sunset in the mountains"
      layout="responsive"
      width={500}
      height={300}
    />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2 font-poppins">
        Visual Learning: The Impact of Video
      </div>
      <p className="text-gray-700 text-base font-poppins">
        <li> Dynamic presentations bring topics to life with visuals and animations.</li>
        <li> Engaging storytelling captures attention and maintains interest.</li>
        <li> Facilitates understanding of complex concepts through demonstrations.</li>
        <li> Accessible for visual learners, combining audio and visual stimuli.</li>
      </p>
    </div>
  </div>

  <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4">
    <Image
      className="w-full h-48 object-cover rounded-t-lg"
      src={icon}
      alt="Sunset in the mountains"
      layout="responsive"
      width={500}
      height={300}
    />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2 font-poppins">
        Extracting Insights: Text from Video Content
      </div>
      <p className="text-gray-700 text-base font-poppins">
        <li> Quick reference for key points discussed in the video.</li>
        <li> Helps reinforce learning through written summaries.</li>
        <li> Ideal for creating notes and study materials efficiently.</li>
        <li> Assists in retaining information by reviewing text alongside video.</li>
      </p>
    </div>
  </div>

  <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4">
    <Image
      className="w-full h-48 object-cover rounded-t-lg"
      src={icon}
      alt="Sunset in the mountains"
      layout="responsive"
      width={500}
      height={300}
    />
    <div className="px-6 py-4 mt-5">
      <div className="font-bold text-xl mb-2 font-poppins">
        PowerPoint: A Structured Approach to Learning
      </div>
      <p className="text-gray-700 text-base font-poppins">
        <li> Visually appealing format enhances engagement and retention.</li>
        <li> Easy to highlight key concepts and takeaways.</li>
        <li> Perfect for summarizing content for presentations or group discussions.</li>
        <li> Flexible for both individual study and collaborative learning environments.</li>
      </p>
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
  <div className="flex items-center flex-col justify-center w-full p-5 m-5 border-4 h-auto border-violet-100 box-border rounded-xl">
    <div className="w-96 h-96 bg-gradient-to-b  from-blue-100 to-green-50 rounded-full flex flex-col items-center justify-center mt-12">
      {/* Centering the image */}
      <Image src={ai} alt='ai' className='h-16 w-16' />
      <div className='font-poppins text-3xl font-bold mt-2'>
        Discover the AI Realm
      </div>
    </div>
    <button className='w-auto border-2 border-gray-100 flex justify-center items-center rounded-xl mt-5'>
      <Image src={note} alt='text' className='h-10 w-10 mt-3 mb-3 ml-3'/>
      <p className='font-poppins m-3 text-2xl font-medium'>
        Generate detailed description
      </p>
    </button>
  </div>
</div>
   


      </div>
   
    </main>
  );
};

export default Page;
