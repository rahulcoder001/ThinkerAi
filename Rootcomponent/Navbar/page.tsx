import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4 fixed top-0 left-0 w-full flex items-center">
      {/* Logo Container on the left */}
      <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
        <img
          src="/images/logo.png"
          alt="loading-image"
          style={{
            width: '4vw',
            height: '5vh',
            filter: 'invert(1)',
          }}
        />
        <h1 style={{fontWeight:'bolder'}}>EDUBOTIX</h1>
      </div>

      {/* Spacer to push the nav to the center */}
      <div style={{ flexGrow: 1 }}></div>

      {/* Navigation Bar centered */}
      <ul className="flex flex-row justify-center" style={{ listStyleType: 'none' }}>
        <li style={{ margin: '0 20px', cursor: 'pointer' }}>Products</li>
        <li style={{ margin: '0 20px', cursor: 'pointer' }}>Pricing</li>
        <li style={{ margin: '0 20px', cursor: 'pointer' }}>Resources</li>
        <li style={{ margin: '0 20px', cursor: 'pointer' }}>Partners</li>
        <li style={{ margin: '0 20px', cursor: 'pointer' }}>Why EDUBOTIX</li>
      </ul>

      {/* Spacer to balance the space */}
      <div style={{ flexGrow: 1 }}></div>

      <div style={{display:'flex',gap:'2rem',marginRight:'1rem'}}>
      <button style={{
  height: '6vh',
  width: '7vw',
  backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent background
  backdropFilter: 'blur(10px)', // Blur effect
  borderRadius: '2rem',
  border: '1px solid rgba(255, 255, 255, 0.3)', // Light border to enhance the glass effect
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
  color: 'white', // Text color for contrast
  fontSize:'0.6rem',
  fontWeight:'bolder'
}}>Contact Us</button>
        <button style={{
  height: '6vh',
  width: '7vw',
  background: 'radial-gradient(circle at top right, rgba(255, 165, 0, 0.5), transparent 100%)',
  borderRadius: '2rem',
  border: 'none', // Optional: Remove border if not needed
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Optional: Add some shadow for depth
  backdropFilter: 'blur(5px)', // Optional: For glass-like effect if desired
   fontSize:'0.6rem',
  fontWeight:'bolder'
}}>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
