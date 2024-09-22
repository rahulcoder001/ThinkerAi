import React, { useState } from 'react';
import Loading from '../Loading/page';

const Main = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);

  const handleAnimationComplete = () => {
    setLoadingComplete(true);
    setTimeout(() => {
      setShowMainContent(true);
    }, 500); // Short delay before showing main content
  };

  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.loadingContainer,
          transform: loadingComplete ? 'translateY(-100%)' : 'translateY(0)',
          opacity: loadingComplete ? 0 : 1,
          transition: 'transform 1s ease-in-out, opacity 0.5s ease-in-out',
        }}
      >
        <Loading onAnimationComplete={handleAnimationComplete} />
      </div>
      <div
        style={{
          ...styles.mainContent,
          transform: showMainContent ? 'translateY(0)' : 'translateY(100%)',
          opacity: showMainContent ? 1 : 0,
          transition: 'transform 1s ease-in-out, opacity 0.5s ease-in-out',
        }}
      >
        <h1>Welcome to EDUBOTIX!</h1>
        <p>This is the main content of your application.</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative', // Position relative to its children
    width: '100%',
    height: '100vh', // Full viewport height
    overflow: 'hidden', // Hide overflow to prevent scrolling
    backgroundColor: 'black', // Background color
  },
  loadingContainer: {
    position: 'absolute', // Absolute positioning within the container
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black', // Keep it the same as the main background to blend seamlessly
  },
  mainContent: {
    position: 'absolute', // Absolute positioning for animation
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100vh', // Full height to cover the container
    display: 'flex',
    flexDirection: 'column', // Align items vertically
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    backgroundColor: 'white', // Background color for the main content
    color: '#333', // Text color
    transform: 'translateY(100%)', // Start position below the screen
    opacity: 0, // Initially hidden
  },
};

export default Main;
