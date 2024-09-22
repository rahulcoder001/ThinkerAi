"use client";
import React, { useEffect, useState } from 'react';
import GalaxyCanvas from '../../Rootcomponent/Galaxy/page';
import Main from '../../Rootcomponent/Main/page';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import styles from './app.module.css'; // Import the new CSS for slide-up
import Cursor from '../../Rootcomponent/Cursor/page'
import  Navbar  from '@/pages/Navbar/Navbar';

const App = () => {
  const [slideUp, setSlideUp] = useState(false); // State to trigger the slide-up animation
  const router = useRouter(); // Initialize useRouter for routing

  useEffect(() => {
    document.body.style.cursor = 'none'; // Set background to black on load
    

    return () => {
      document.body.style.cursor = ''; // Reset to default or global background
      
    };
  }, []);
  const handleSlideUp = () => {
    setSlideUp(true); // Trigger the slide-up effect

    // Delay the navigation to allow the slide-up animation to complete
    setTimeout(() => {
      router.push('/dropdown'); // Navigate to the dropdown page
    }, 600); // The delay should match your slide-up transition duration (0.6s here)
  };

  return (
    <div className={`${styles.container} ${slideUp ? styles['slide-up'] : ''}`}>
      <Navbar/>
      <Cursor/>
      <GalaxyCanvas />
      <Main onArrowClick={handleSlideUp} /> {/* Pass the function as a prop */}
    </div>
  );
};

export default App;
