import Navbar from '@/pages/Navbar/Navbar';
import Image from 'next/image';
import icon from "../../images/icon.svg";

import React from 'react';

const Page = () => {
  return (
    <main>
      <Navbar />
      <div className="h-screen w-screen bg-gradient-to-b from-orange-100 to-white flex flex-col justify-center items-center">
        <div className="inline-flex items-center bg-black text-white px-3 py-2 m-4 rounded-3xl">
          <Image src={icon} alt="icon" width={24} height={24} className="mr-2" />
          <span className='font-poppins'>Model Serving Your Way</span>
        </div>
        <div className="flex flex-col items-center text-center">
  <h1 className='text-5xl font-bold font-poppins'>
    From Idea to Impact
  </h1>
  <h1 className='text-5xl font-bold font font-poppins mt-2'>
    Design Courses That Make a Difference!
  </h1>
</div>
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <Image className="w-full" src={icon} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
    </main>
  );
};

export default Page;
