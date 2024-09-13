"use client"; // Ensure this component runs on the client-side

import React, { useEffect, useState } from 'react';
import styles from './main.module.css'; // Import styles as module
import dots from "/public/images/dots.png";
import Image from 'next/image';

const Page = () => {
  const [visible, setVisible] = useState(false);
  const [rotated, setRotated] = useState(false);

  // Single definition of handleClick
  const handleClick = () => {
    setRotated(!rotated); // Toggle rotation state on click
    console.log("clicked");
  };

  useEffect(() => {
    document.body.style.backgroundColor = 'black'; // Set background to black on load
    document.body.style.overflow = 'hidden'; // Hide overflow
    document.body.style.color='white'

    // Clean up by resetting the background and overflow when the component is unmounted
    return () => {
      document.body.style.backgroundColor = ''; // Reset to default or global background
      document.body.style.overflow = ''; // Reset overflow
      document.body.style.color = ''; // Reset overflow
    };
  }, []);

  useEffect(() => {
    // Set the navbar to visible after a short delay
    setTimeout(() => {
      setVisible(true);
    }, 1000); // Adjust delay as needed
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        {Array.from("Thinker.AI").map((letter, index) => (
          <span key={index} className={styles['reveal-letter']} style={{ animationDelay: `${index * 0.1}s` }}>
            {letter}
          </span>
        ))}
      </h1>
      <section className={styles.nav_section}>
        <button className={`${styles.language} ${visible ? styles.show : ''}`}>Eng</button>
        <button className={`${styles.signin} ${visible ? styles.show : ''}`}>Sign In</button>
      </section>
      <h1 className={styles.sub_heading}>
        <span className={styles['reveal-sentence']}>Tailored learning Experiences Crafted by AI</span>
      </h1>
      <div className={styles.sub_heading1}>
        <span className={styles['reveal-sentence']}>Your AI Education Companion</span>
      </div>

      <h1 className={styles.sub_heading_part2}>
        {Array.from("NEXT-LEVEL LEARNING").map((letter, index) => (
          <span key={index} className={styles['reveal-letter']} style={{ animationDelay: `${index * 0.2}s` }}>
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </h1>

      <h1 className={styles.sub_heading3}>
        {Array.from("Simply state your request about what you want to study, and Thinker.AI will create a personalized learning for you").map((letter, index) => (
          <span key={index} className={styles['reveal-letter1']} style={{ animationDelay: `${index * 0.05}s` }}>
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </h1>

      <button className={`${styles.navbar} ${visible ? styles.show : ''}`}>
        <Image
          src={dots}
          alt='loading-image'
          style={{ filter: 'invert(1)' }}
          height={20}
          width={20}
        />
        <h1>Menu</h1>
      </button>

      <div className={styles.redirect}>
        <svg viewBox="0 0 120 120" className={styles['circle-svg']}>
          <defs>
            <path id="circlePath" d="M 60, 60 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0" />
          </defs>
          <text>
            <textPath href="#circlePath" className={styles['circle-text']}>
              Explore now Explore now Explore now
            </textPath>
          </text>
        </svg>
        <img
          width="45"
          height="45"
          src="https://img.icons8.com/hieroglyphs/64/up-right.png"
          alt="up-right"
          className={`${styles['moving-arrow1']} ${rotated ? styles['rotate-opposite'] : ""}`} // Toggle class
          onClick={handleClick} // Click handler for rotation
        />
      </div>
    </div>
  );
};

export default Page;
