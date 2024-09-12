import React from 'react';
import styles from './SignIn.module.css'; // Import the CSS module
import email from '../../images/email.svg';
import google from '../../images/google.svg';
import facebook from '../../images/facebook.svg';
import bgimage from '../../images/bg.svg';
import Image from 'next/image';

const SignInPage = () => {
  return (
    <main className={`${styles.background} relative w-full overflow-hidden`}>
      <div className="flex h-screen w-full">
        {/* Left */}
        <div className="relative w-[55%] h-full">
          {/* Background Image */}
          <Image 
            src={bgimage} 
            alt="background" 
            className={`h-full w-full object-cover ${styles.imageReveal}`}
          />

          {/* Thinker.Ai with letter animation */}
          <div className="absolute top-4 left-4 font-bold text-3xl text-white">
            <span className={styles.letter}>T</span>
            <span className={styles.letter}>h</span>
            <span className={styles.letter}>i</span>
            <span className={styles.letter}>n</span>
            <span className={styles.letter}>k</span>
            <span className={styles.letter}>e</span>
            <span className={styles.letter}>r</span>
            <span className={styles.letter}>.</span>
            <span className={styles.letter}>A</span>
            <span className={styles.letter}>i</span>
          </div>

          {/* Text Overlay - SIGN IN TO YOUR ADVENTURE */}
          <div className="absolute bottom-4 left-4 text-5xl font-extrabold text-white">
            <span className={styles.letter}>S</span>
            <span className={styles.letter}>I</span>
            <span className={styles.letter}>G</span>
            <span className={styles.letter}>N</span>
            <span> </span>
            <span className={styles.letter}>I</span>
            <span className={styles.letter}>N</span>
            
            <span className={styles.letter}>T</span>
            <span className={styles.letter}>O</span>
            <span> </span>
            <span className={styles.letter}>Y</span>
            <span className={styles.letter}>O</span>
            <span className={styles.letter}>U</span>
            <span className={styles.letter}>R</span>
            <br />
            <span className='text-[#501794]'>
            <span className={styles.letter}>A</span>
            <span className={styles.letter}>D</span>
            <span className={styles.letter}>V</span>
            <span className={styles.letter}>E</span>
            <span className={styles.letter}>N</span>
            <span className={styles.letter}>T</span>
            <span className={styles.letter}>U</span>
            <span className={styles.letter}>R</span>
            <span className={styles.letter}>E</span>
            </span>
          </div>
        </div>

        {/* Right - SIGN IN and Input Fields */}
        <div className="w-[45%] flex flex-col justify-center items-start min-h-screen">
          <div className="font-extrabold text-5xl text-left text-white">
            <span className={styles.letter}>S</span>
            <span className={styles.letter}>I</span>
            <span className={styles.letter}>G</span>
            <span className={styles.letter}>N</span>
            <span> </span>
            <span className={styles.letter}>I</span>
            <span className={styles.letter}>N</span>
          </div>
          
          <div className="mt-8 font-mono text-white">
            <span className={styles.letter}>S</span>
            <span className={styles.letter}>i</span>
            <span className={styles.letter}>g</span>
            <span className={styles.letter}>n</span> 
            <span> </span>
            <span className={styles.letter}>i</span>
            <span className={styles.letter}>n</span> 
            <span> </span>
            <span className={styles.letter}>w</span>
            <span className={styles.letter}>i</span>
            <span className={styles.letter}>t</span>
            <span className={styles.letter}>h</span>
            <span> </span>
            <span className={styles.letter}>e</span>
            <span className={styles.letter}>m</span>
            <span className={styles.letter}>a</span>
            <span className={styles.letter}>i</span>
            <span className={styles.letter}>l</span>
            <span> </span>
            <span className={styles.letter}>a</span>
            <span className={styles.letter}>d</span>
            <span className={styles.letter}>d</span>
            <span className={styles.letter}>r</span>
            <span className={styles.letter}>e</span>
            <span className={styles.letter}>s</span>
            <span className={styles.letter}>s</span>

          </div>

          {/* Email Input */}
          <div className={`${styles.inputReveal} w-full max-w-md flex items-center p-4 mb-4 mt-2 bg-[#25184b] rounded-lg`}>
            {/* Email Icon */}
            <Image src={email} alt="Email Icon" className="w-6 h-6 mr-3" />
            {/* Email Input */}
            <input 
              type="email" 
              placeholder="Yourname@gmail.com" 
              className="w-full bg-transparent font-mono bg-[#25184b] rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Password Input */}
          <div className={`${styles.inputReveal} w-full max-w-md flex items-center p-4 mb-4 mt-2 bg-[#25184b] rounded-lg`}>
            {/* Password Input */}
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full bg-transparent font-mono bg-[#25184b] rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Sign In Button with animation */}
          <button className={`w-full max-w-md p-4 mb-2 font-mono text-white bg-gradient-to-r from-indigo-500 to-blue-500 font-semibold rounded-xl ${styles.signInButton}`}>
            Sign In
          </button>

          <hr className="w-full max-w-md border-t-2 border-gray-600 mt-4" />

          <div className='font-mono text-white'>
            Don't have an Account? <a href="/signup">Signup</a>
          </div>

          <div className='mt-7 text-[#B6B6B6] text-sm font-sans'>
            Or continue with
          </div>

          {/* Google and Facebook buttons with animation */}
          <div className='flex flex-row space-x-4 mt-2'>
            <div className={`bg-[#3B2063] text-white p-4 w-52 h-9 flex items-center rounded-xl justify-center ${styles.buttonReveal}`}>
              <Image src={google} alt='google' className='mr-3'/>
              Google
            </div>
            <div className={`bg-[#3B2063] text-white p-4 w-52 h-9 flex items-center rounded-xl justify-center ${styles.buttonReveal}`}>
              <Image src={facebook} alt='facebook' className='mr-3'/>
              Facebook
           

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SignInPage;
