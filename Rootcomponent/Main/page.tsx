import React from 'react';
import './main.css';

const Page = () => {
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
        <button className="language">Eng</button>
        <button className="signin">Sign In</button>
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

<button className='navbar'>
     
</button>

    </div>
  );
}

export default Page;
