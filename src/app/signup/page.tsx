import React from 'react';
import email from '../../images/email.svg';
import google from '../../images/google.svg';
import facebook from '../../images/facebook.svg';
import bgimage from '../../images/bg.svg';
import Image from 'next/image';
import styles from './SignUp.module.css'; // Import the CSS module

const SignUpPage = () => {
  return (
    <main className={`${styles.background} relative min-h-screen w-full overflow-hidden`}>
     
      <div className="flex h-screen w-full">
        {/* Left */}
        <div className="w-[55%] h-full">
          {/* Background Image for the left side */}
          <Image 
            src={bgimage} 
            alt="background" 
            className="h-full w-full object-cover"
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
           
            <span className={styles.letter}>U</span>
            <span className={styles.letter}>P</span>
            <span></span>
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

        {/* Right */}
        <div className="w-[45%] flex flex-col justify-center items-start min-h-screen">

          {/* Title with letter reveal animation */}
          <div className={`${styles.letter} font-mono text-4xl font-bold text-white`}>
  {
    "CREATE ACCOUNT".split("").map((char, index) => (
      <span key={index} className={styles.letter}>
        {char === " " ? "\u00A0" : char} {/* Adds a non-breaking space for the space character */}
      </span>
    ))
  }
</div>
          
          {/* Email Input */}
          <div className={`${styles.inputReveal} w-full max-w-md flex items-center p-4 mb-4 mt-2 bg-[#25184b] rounded-lg`}>
            {/* Email Icon */}
            <Image src={email} alt="Email Icon" className="w-6 h-6 mr-3" />

            {/* Email Input */}
            <input 
              type="email" 
              placeholder="Yourname@gmail.com" 
              className="w-full bg-transparent bg-[#25184b] rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 "
            />
          </div>

          {/* Username Input */}
          <div className={`${styles.inputReveal} w-full`}>
            <input 
              type="text" 
              placeholder="Username" 
              className="w-full max-w-md p-4 mb-6 bg-[#25184b] rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Password Input */}
          <div className={`${styles.inputReveal} w-full`}>
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full max-w-md p-4 mb-6 bg-[#25184b] rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Sign Up Button with reveal animation */}
          <button className={`${styles.buttonReveal} w-full max-w-md p-4 mb-2 text-white bg-gradient-to-r font-mono from-indigo-500 to-blue-500 font-semibold rounded-xl`}>
            {
              "Create Account".split("").map((char, index) => (
                <span key={index} className={styles.buttonText}>{char}</span>
              ))
            }
          </button>
          
          <hr className="w-full max-w-md border-t-2 border-gray-600 mt-4" />
          <div className={`${styles.textReveal} text-white font-mono`}>
            Already have an account? <a href="/signin">Sign In</a>
          </div>

          {/* Alternative Sign Up Methods */}
          <div className={`${styles.textReveal} mt-7 text-[#B6B6B6] text-sm font-sans`}>
            Or continue with
          </div>

          <div className="flex flex-row space-x-4 mt-2">
            {/* Google Button with animation */}
            <div className={`${styles.buttonReveal} ${styles.googleButton} bg-[#3B2063] text-white p-4 w-52 h-9 flex items-center rounded-xl justify-center`}>
              <Image src={google} alt='google' className='mr-1'/>
              Google
            </div>

            {/* Facebook Button with animation */}
            <div className={`${styles.buttonReveal} ${styles.facebookButton} bg-[#3B2063] text-white p-4 w-52 h-9 flex items-center rounded-xl justify-center`}>
              <Image src={facebook} alt='facebook' className='mr-1'/>
              Facebook
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SignUpPage;
