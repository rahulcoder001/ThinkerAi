import React from 'react';
import email from '../../images/email.svg';
import google from '../../images/google.svg';
import facebook from '../../images/facebook.svg';
import bgimage from '../../images/bg.svg';
import Image from 'next/image';

const SignInPage = () => {
  return (
    <main className="relative bg-[#160430] min-h-screen w-full overflow-hidden">
     
     <div className="flex h-screen w-full">
  {/* Left */}
  <div className="w-[55%] h-full">
    {/* Content for the left side */}
    <Image 
      src={bgimage} 
      alt="background" 
      className="h-full w-full object-cover"
    />
  </div>

        {/* Right */}
        <div className="w-[45%] flex flex-col justify-center items-start min-h-screen">

          <div className='font-extrabold text-5xl text-left'>
            SIGN IN
          </div>
          <div className='mt-8 font-sans'>
            Sign in with email address
          </div>

          {/* Email Input */}
          <div className="w-full max-w-md flex items-center p-4 mb-4 mt-2 bg-[#25184b] rounded-lg">
            {/* Email Icon */}
            <Image src={email} alt="Email Icon" className="w-6 h-6 mr-3" />

            {/* Email Input */}
            <input 
              type="email" 
              placeholder="Yourname@gmail.com" 
              className="w-full bg-transparent  bg-[#25184b] rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Password Input */}
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full max-w-md p-4 mb-6 bg-[#25184b] rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* Sign In Button */}
          <button className="w-full max-w-md p-4 mb-2 font-sans bg-gradient-to-r from-indigo-500 to-blue-500 font-semibold rounded-xl">
            Sign In
          </button>
          <hr className="w-full max-w-md border-t-2 border-gray-600 mt-4" />
          <div className='mt-7 text-[#B6B6B6] text-sm font-sans'>
            Or continue with
          </div>

          <div className='flex flex-row space-x-4 mt-2'>
  <div className='bg-[#3B2063] text-white p-4 w-52 h-9 flex items-center rounded-xl justify-center'>
    <Image src={google} alt='google' className='mr-1'/>
    Google
  </div>
  <div className='bg-[#3B2063] text-white p-4 w-52 h-9 flex items-center rounded-xl justify-center'>
    <Image src={facebook} alt='facebook' className='mr-1'/>
    Facebook
  </div>
</div>
        </div>
      </div>
    </main>
  );
}

export default SignInPage;
