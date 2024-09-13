"use client";
import React, { useEffect } from 'react';
import './cursor.css';

const Page = () => {
  useEffect(() => {
    const cursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');

    // Mousemove event to track the mouse position
    const onMouseMove = (e) => {
      const { clientX, clientY } = e;

      // Update the position of the dot (centered on the cursor)
      cursorDot.style.transform = `translate(${clientX}px, ${clientY}px)`;

      // Update the position of the outline (centered on the cursor)
      if (cursorOutline) {
        cursorOutline.style.transform = `translate(${clientX}px, ${clientY}px)`;
      }
    };

    // Handle click event when clicking on the cursor dot
    const onClick = (e) => {
      const { clientX, clientY } = e;
      const dotRect = cursorDot.getBoundingClientRect();
      
      // Check if the click happened inside the cursor dot area
      if (
        clientX >= dotRect.left &&
        clientX <= dotRect.right &&
        clientY >= dotRect.top &&
        clientY <= dotRect.bottom
      ) {
        console.log('Cursor dot clicked!');
        // You can put any logic you want here when the cursor is clicked
      }
    };

    // Attach the event listeners to the document
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('click', onClick);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <div>
      <div className="cursor_dot" data-cursor-dot></div>
    
    </div>
  );
};

export default Page;
