import React, { useState } from 'react';
import Loading from '../Loading/page';
import Navbar from '../Navbar/page';

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
        <Navbar />

        <div style={{width:'10vw',height:'5vh',backgroundColor:'white',borderRadius:'1rem',textAlign:'center'}}>
          Beta release
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    backgroundColor: 'black',
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  mainContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: `
      radial-gradient(circle at top right, rgba(255, 165, 0, 0.5), transparent 30%),
      linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px) 0 0 / 100px 100%,
      linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px) 0 0 / 100% 100px
    `,
    backgroundSize: 'cover',
  },
};

export default Main;
