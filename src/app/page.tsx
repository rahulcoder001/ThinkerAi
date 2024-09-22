"use client";
import React, { useEffect, useState } from 'react';

import Main from '../../Rootcomponent/Main/page';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import styles from './app.module.css'; // Import the new CSS for slide-up
import  Navbar  from '@/pages/Navbar/Navbar';

const App = () => {

  const router = useRouter(); // Initialize useRouter for routing


 
  return (
    <div>
      <Navbar/>
      <Main /> {/* Pass the function as a prop */}
    </div>
  );
};

export default App;
