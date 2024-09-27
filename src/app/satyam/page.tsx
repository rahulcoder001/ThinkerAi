import React from "react";
import styles from "./prompt.module.css";
import Navbar from "../../../Rootcomponent/Navbar/page";

const Page = () => {
  return (
    <div style={{overflow:'hidden'}}>
      <main
        className={styles.main}
        style={{ height: "100vh", backgroundColor: "black", color: "white" }}
      >
        <Navbar />
        <div style={{position:'relative',top:'5rem',left:'25rem'}}>
          <h1 style={{ width: "42.75vw", fontSize: "2rem" }} className={styles.gradientText}>
            Hi there, John{" "}
          </h1>
          <h1 className={styles.gradientText} style={{ width: "55vw", fontSize: "2rem" }}>
            What would like to know?{" "}
          </h1>

          <p style={{width:'20vw',fontSize:'0.6rem'}} className="text-gray-500">Use one of the most common prompts below or use your own to begin</p>
        </div>

        <div className={styles.commonprompts}>
             <div className={styles.box1}>
                  <h1 style={{width:'8vw',fontSize:'0.4rem',margin:'0.5rem',color:'white'}}>Write a to-do list for a personal project or task</h1>
                  <img src="/boy.png" alt="loading-image" style={{filter: 'invert(1)',height:'5vh',marginTop:'2.7rem',marginLeft:'0.4rem'}} />
             </div>
             <div className={styles.box1}>
                  <h1 style={{width:'8vw',fontSize:'0.4rem',margin:'0.5rem',color:'white'}}>Generate an email ro reply to a job offer</h1>
                  <img src="/email.png" alt="loading-image" style={{filter: 'invert(1)',height:'5vh',marginTop:'2.9rem',marginLeft:'0.4rem'}} />
             </div>
             <div className={styles.box1}>
                  <h1 style={{width:'8vw',fontSize:'0.4rem',margin:'0.5rem',color:'white'}}>Summarise this article or text for me in one paragraph</h1>
                  <img src="/chat.png" alt="loading-image" style={{filter: 'invert(1)',height:'4vh',marginTop:'2.5rem',marginLeft:'0.4rem'}} />
             </div>
             <div className={styles.box1}>
                  <h1 style={{width:'8vw',fontSize:'0.4rem',margin:'0.5rem',color:'white'}}>How does AI work in a texhnical capacity</h1>
                  <img src="/cpu.png" alt="loading-image" style={{filter: 'invert(1)',height:'4vh',marginTop:'2.9rem',marginLeft:'0.4rem'}} />
             </div>
        </div>
        <div className={styles.inputContainer}>
          <input
            className={styles.messageinput}
            placeholder="Ask whatever you want...."
          />
          <div style={{display:'flex'}}>
           <div className={styles.circlePlus}></div>
           <h1 style={{color:'black',position:'relative',bottom:'1.8rem',fontWeight:'bolder',left:'1rem',fontSize:'0.8rem'}}>Add attachment</h1>
           <img src="/im.png" alt="loading-image" style={{height:'4vh',position:'relative',bottom:'2rem',left:'2rem'}} />
           <h1 style={{color:'black',position:'relative',bottom:'1.8rem',fontWeight:'bolder',left:'2.7rem',fontSize:'0.8rem'}}>Use Image</h1>
            <div className={styles.send}>
            <img src="/right.png" alt="loading-image" style={{filter: 'invert(1)',height:'3vh',marginTop:'2.9rem',marginLeft:'0.4rem',position:'relative',bottom:'1.5rem',right:'0.1rem'}} />
            </div>
           </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
