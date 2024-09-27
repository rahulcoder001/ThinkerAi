import Image from 'next/image';
import React from 'react';
import logo from "/public/images/nav.jpg";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-1/4 right-1/4 text-white bg-[#18181b] shadow-lg rounded-3xl py-1 px-4 mt-4 max-w-4xl mx-auto">
      <ul className="flex justify-between items-center">
        <li>
          <Image 
            src={logo} 
            alt="logo"
            width={40} 
            height={40} 
            className="rounded-full bg-transparent" 
          />
        </li>
        <li>
          <a href="#" className=" font-poppins text-white hover:text-orange-500">
            Features
          </a>
        </li>
        <li>
          <a href="#" className="font-poppins text-white hover:text-orange-500">
            Resources
          </a>
        </li>
        <li>
          <a href="#" className="font-poppins text-white hover:text-orange-500">
            WhyEduBotix
          </a>
        </li>
        <li>
          <div className=" font-poppins flex items-center bg-white text-black rounded-xl px-4 py-1">
            <a href="/signup" className="text-black hover:text-orange-500">
              Signup For Free
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
