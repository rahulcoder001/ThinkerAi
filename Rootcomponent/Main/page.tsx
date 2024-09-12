"use client"
import React,{useEffect,useState} from 'react';
import './main.css';
import dots from "/public/images/dots.png";
import Image from 'next/image';

const Page = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Set the navbar to visible after a short delay
    setTimeout(() => {
      setVisible(true);
    }, 1000); // Adjust delay as needed
  }, []);
  return (
    <div>
      <h1 className="heading">
        {Array.from("Thinker.AI").map((letter, index) => (
          <span key={index} className="reveal-letter" style={{ animationDelay: `${index * 0.1}s` }}>
            {letter}
          </span>
        ))}
      </h1>
      <section className="nav_section">
      <button className={`language ${visible ? 'show' : ''}`}>Eng</button>
      <button className={`signin ${visible ? 'show' : ''}`}>Sign In</button>
      </section>
      <h1 className='sub_heading'>
        <span className="reveal-sentence">Tailored learning Experiences Crafted by AI</span>
      </h1>
       <div className='sub_heading1'>
       <span className="reveal-sentence">Your AI Education Companion</span>
      
      </div>

      <h1 className='sub_heading_part2'>
  {Array.from("NEXT-LEVEL LEARNING").map((letter, index) => (
    <span key={index} className="reveal-letter" style={{ animationDelay: `${index * 0.2}s` }}>
      {letter === ' ' ? '\u00A0' : letter} {/* Handle spaces */}
    </span>
  ))}
</h1>

<h1 className='sub_heading3'>
  {Array.from("Simply state your request about what you want to study, and Thinker.AI will create a personalized learning for you").map((letter, index) => (
    <span key={index} className="reveal-letter1" style={{ animationDelay: `${index * 0.05}s` }}>
      {letter === ' ' ? '\u00A0' : letter} {/* Handle spaces */}
    </span>
  ))}
</h1>

<button className={`navbar ${visible ? 'show' : ''}`}>
      <Image
        src={dots}
        alt='loading-image'
        style={{ filter: 'invert(1)' }}
        height={20}
        width={20}
      />
      <h1>Menu</h1>
    </button>

    </div>
  );
}

export default Page;
