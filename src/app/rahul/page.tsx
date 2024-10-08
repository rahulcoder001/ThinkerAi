"use client"
import Image from "next/image";
import './style.css'
import starimg from "../../../public/images/staricon.svg"
import { useEffect, useState } from "react";

import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);



function TextIcon(){
  return <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 100 100">
  <path fill="#c7ede6" d="M87.215,56.71C88.35,54.555,89,52.105,89,49.5c0-6.621-4.159-12.257-10.001-14.478 C78.999,35.015,79,35.008,79,35c0-11.598-9.402-21-21-21c-9.784,0-17.981,6.701-20.313,15.757C36.211,29.272,34.638,29,33,29 c-7.692,0-14.023,5.793-14.89,13.252C12.906,43.353,9,47.969,9,53.5C9,59.851,14.149,65,20.5,65c0.177,0,0.352-0.012,0.526-0.022 C21.022,65.153,21,65.324,21,65.5C21,76.822,30.178,86,41.5,86c6.437,0,12.175-2.972,15.934-7.614C59.612,80.611,62.64,82,66,82 c4.65,0,8.674-2.65,10.666-6.518C77.718,75.817,78.837,76,80,76c6.075,0,11-4.925,11-11C91,61.689,89.53,58.727,87.215,56.71z"></path><path fill="#fdfcef" d="M67.125,47.5c0,0-3.64,0-6.125,0s-4.5-2.015-4.5-4.5c0-2.333,1.782-4.229,4.055-4.455 C60.533,38.364,60.5,38.187,60.5,38c0-2.485,2.015-4.5,4.5-4.5c1.438,0,2.703,0.686,3.527,1.736C68.667,32.6,70.829,30.5,73.5,30.5 c2.761,0,5,2.239,5,5c0,0.446-0.077,0.87-0.187,1.282c0.642-0.777,1.6-1.282,2.687-1.282c1.781,0,3.234,1.335,3.455,3.055 C84.636,38.533,84.813,38.5,85,38.5c2.485,0,4.5,2.015,4.5,4.5s-2.015,4.5-4.5,4.5s-9.5,0-9.5,0h-5.375V48h-3V47.5z"></path><path fill="#472b29" d="M73.5,30c3.033,0,5.5,2.467,5.5,5.5c0,0.016,0,0.031,0,0.047C79.602,35.192,80.29,35,81,35 c1.831,0,3.411,1.261,3.858,3.005C84.905,38.002,84.952,38,85,38c2.757,0,5,2.243,5,5s-2.243,5-5,5H70.125 c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5H85c2.206,0,4-1.794,4-4s-1.794-4-4-4c-0.117,0-0.23,0.017-0.343,0.032l-0.141,0.019 c-0.021,0.003-0.041,0.004-0.062,0.004c-0.246,0-0.462-0.185-0.495-0.437C83.768,37.125,82.496,36,81,36 c-0.885,0-1.723,0.401-2.301,1.1c-0.098,0.118-0.241,0.182-0.386,0.182c-0.078,0-0.156-0.018-0.228-0.056 c-0.209-0.107-0.314-0.346-0.254-0.573C77.946,36.218,78,35.852,78,35.5c0-2.481-2.019-4.5-4.5-4.5 c-2.381,0-4.347,1.872-4.474,4.263c-0.011,0.208-0.15,0.387-0.349,0.45c-0.05,0.016-0.101,0.024-0.152,0.024 c-0.15,0-0.296-0.069-0.392-0.192C67.362,34.563,66.221,34,65,34c-2.206,0-4,1.794-4,4c0,0.117,0.017,0.23,0.032,0.343l0.019,0.141 c0.016,0.134-0.022,0.268-0.106,0.373c-0.084,0.105-0.207,0.172-0.34,0.185C58.549,39.247,57,40.949,57,43c0,2.206,1.794,4,4,4 h6.125c0.276,0,0.5,0.224,0.5,0.5s-0.224,0.5-0.5,0.5H61c-2.757,0-5-2.243-5-5c0-2.397,1.689-4.413,4.003-4.877 C60.001,38.082,60,38.041,60,38c0-2.757,2.243-5,5-5c1.176,0,2.293,0.416,3.183,1.164C68.781,31.76,70.945,30,73.5,30L73.5,30z"></path><path fill="#472b29" d="M75 37c1.403 0 2.609.999 2.913 2.341C78.28 39.119 78.699 39 79.125 39c1.202 0 2.198.897 2.353 2.068C81.681 41.022 81.874 41 82.063 41c1.529 0 2.811 1.2 2.918 2.732C84.99 43.87 84.886 43.99 84.749 44c-.006 0-.012 0-.018 0-.13 0-.24-.101-.249-.232-.089-1.271-1.151-2.268-2.419-2.268-.229 0-.47.042-.738.127-.022.007-.045.01-.067.01-.055 0-.11-.02-.156-.054C81.038 41.537 81 41.455 81 41.375c0-1.034-.841-1.875-1.875-1.875-.447 0-.885.168-1.231.473-.047.041-.106.063-.165.063-.032 0-.063-.006-.093-.019-.088-.035-.148-.117-.155-.212C77.377 38.512 76.288 37.5 75 37.5c-.208 0-.425.034-.682.107-.023.007-.047.01-.07.01-.109 0-.207-.073-.239-.182-.038-.133.039-.271.172-.309C74.483 37.04 74.744 37 75 37L75 37zM61.117 38.5c1.326 0 2.508.897 2.874 2.182.038.133-.039.271-.172.309C63.795 40.997 63.772 41 63.75 41c-.109 0-.209-.072-.24-.182C63.205 39.748 62.221 39 61.117 39c-.117 0-.23.014-.342.029-.012.002-.023.003-.035.003-.121 0-.229-.092-.246-.217-.019-.137.077-.263.214-.281C60.842 38.516 60.978 38.5 61.117 38.5L61.117 38.5z"></path><path fill="#fff" d="M15.405 51H5.5C5.224 51 5 50.776 5 50.5S5.224 50 5.5 50h9.905c.276 0 .5.224.5.5S15.682 51 15.405 51zM18.5 51h-1c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1c.276 0 .5.224.5.5S18.777 51 18.5 51zM23.491 53H14.5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h8.991c.276 0 .5.224.5.5S23.767 53 23.491 53zM12.5 53h-1c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1c.276 0 .5.224.5.5S12.777 53 12.5 53zM9.5 53h-2C7.224 53 7 52.776 7 52.5S7.224 52 7.5 52h2c.276 0 .5.224.5.5S9.777 53 9.5 53zM15.5 55h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.276 0 .5.224.5.5S15.776 55 15.5 55zM18.5 46c-.177 0-.823 0-1 0-.276 0-.5.224-.5.5 0 .276.224.5.5.5.177 0 .823 0 1 0 .276 0 .5-.224.5-.5C19 46.224 18.776 46 18.5 46zM18.5 48c-.177 0-4.823 0-5 0-.276 0-.5.224-.5.5 0 .276.224.5.5.5.177 0 4.823 0 5 0 .276 0 .5-.224.5-.5C19 48.224 18.776 48 18.5 48zM23.5 50c-.177 0-2.823 0-3 0-.276 0-.5.224-.5.5 0 .276.224.5.5.5.177 0 2.823 0 3 0 .276 0 .5-.224.5-.5C24 50.224 23.776 50 23.5 50zM70.5 22h-10c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10c.276 0 .5.224.5.5S70.776 22 70.5 22zM74.5 22h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.276 0 .5.224.5.5S74.776 22 74.5 22zM79.5 24h-10c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10c.276 0 .5.224.5.5S79.777 24 79.5 24zM67.5 24h-1c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1c.276 0 .5.224.5.5S67.776 24 67.5 24zM64.375 24H62.5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1.875c.276 0 .5.224.5.5S64.651 24 64.375 24zM73.5 20h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5c.276 0 .5.224.5.5S73.777 20 73.5 20zM70.5 26h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.276 0 .5.224.5.5S70.776 26 70.5 26z"></path><path fill="#fefdef" d="M38.153,74.3c-2.456,0-4.453-1.967-4.453-4.385v-35.83c0-2.418,1.998-4.385,4.453-4.385h18.61 L68.3,41.083l0,28.832c0,2.418-1.998,4.385-4.453,4.385H38.153z"></path><path fill="#472b29" d="M56.477,30.4l4.155,4.099l6.968,6.876v28.54c0,2.032-1.684,3.684-3.753,3.684H38.153 c-2.07,0-3.753-1.653-3.753-3.684V34.084c0-2.032,1.684-3.684,3.753-3.684h0.748h1.672h5.373H56.477 M57.051,29H45.947h-5.373 h-1.672h-0.748C35.319,29,33,31.288,33,34.084v35.831C33,72.712,35.319,75,38.153,75h25.693c2.835,0,5.153-2.288,5.153-5.084 V40.79H69C64.353,36.205,61.698,33.585,57.051,29L57.051,29z"></path><path fill="#fef6aa" d="M56.5,30.125v5.62c0,2.616,1.991,4.755,4.424,4.755h6.201"></path><path fill="#472b29" d="M67.125 41h-6.201C58.209 41 56 38.643 56 35.744v-5.619h1v5.619C57 38.091 58.76 40 60.924 40h6.201V41zM63.1 72H38.917C37.308 72 36 70.715 36 69.136V35.348c0-1.57 1.301-2.848 2.9-2.848h1.6c.276 0 .5.224.5.5s-.224.5-.5.5h-1.6c-1.048 0-1.9.829-1.9 1.848v33.788C37 70.164 37.86 71 38.917 71H63.1c1.048 0 1.9-.829 1.9-1.848V55.289c0-.276.224-.5.5-.5s.5.224.5.5v13.863C66 70.723 64.699 72 63.1 72zM65.5 53c-.276 0-.5-.224-.5-.5v-4c0-.276.224-.5.5-.5s.5.224.5.5v4C66 52.776 65.776 53 65.5 53zM65.5 47c-.276 0-.5-.224-.5-.5v-3c0-.276.224-.5.5-.5s.5.224.5.5v3C66 46.776 65.776 47 65.5 47z"></path><path fill="#472b29" d="M50.5 45.75h-10c-.138 0-.25-.112-.25-.25s.112-.25.25-.25h10c.138 0 .25.112.25.25S50.638 45.75 50.5 45.75zM50.5 49.75h-10c-.138 0-.25-.112-.25-.25s.112-.25.25-.25h10c.138 0 .25.112.25.25S50.638 49.75 50.5 49.75zM50.5 53.75h-10c-.138 0-.25-.112-.25-.25s.112-.25.25-.25h10c.138 0 .25.112.25.25S50.638 53.75 50.5 53.75zM47.5 57.75h-7c-.138 0-.25-.112-.25-.25s.112-.25.25-.25h7c.138 0 .25.112.25.25S47.638 57.75 47.5 57.75zM50.5 61.75h-10c-.138 0-.25-.112-.25-.25s.112-.25.25-.25h10c.138 0 .25.112.25.25S50.638 61.75 50.5 61.75zM51.5 65.75h-11c-.138 0-.25-.112-.25-.25s.112-.25.25-.25h11c.138 0 .25.112.25.25S51.638 65.75 51.5 65.75zM61.5 65.75h-8c-.138 0-.25-.112-.25-.25s.112-.25.25-.25h8c.138 0 .25.112.25.25S61.638 65.75 61.5 65.75zM61.5 57.75h-12c-.138 0-.25-.112-.25-.25s.112-.25.25-.25h12c.138 0 .25.112.25.25S61.638 57.75 61.5 57.75zM61.5 61.75h-4c-.138 0-.25-.112-.25-.25s.112-.25.25-.25h4c.138 0 .25.112.25.25S61.638 61.75 61.5 61.75zM55.5 61.75h-4c-.138 0-.25-.112-.25-.25s.112-.25.25-.25h4c.138 0 .25.112.25.25S55.638 61.75 55.5 61.75z"></path><path fill="#fef6aa" d="M52.5 55L52.5 45.5 61.5 45.5 61.5 54.5 56 54.5"></path><path fill="#472b29" d="M52.75 55L52.25 55 52.25 45.25 61.75 45.25 61.75 54.75 56 54.75 56 54.25 61.25 54.25 61.25 45.75 52.75 45.75z"></path><path fill="#fdfcef" d="M37.5,78.5c0,0,1.567,0,3.5,0s3.5-1.567,3.5-3.5c0-1.781-1.335-3.234-3.055-3.455 C41.473,71.366,41.5,71.187,41.5,71c0-1.933-1.567-3.5-3.5-3.5c-1.032,0-1.95,0.455-2.59,1.165 c-0.384-1.808-1.987-3.165-3.91-3.165c-2.209,0-4,1.791-4,4c0,0.191,0.03,0.374,0.056,0.558C27.128,69.714,26.592,69.5,26,69.5 c-1.228,0-2.245,0.887-2.455,2.055C23.366,71.527,23.187,71.5,23,71.5c-1.933,0-3.5,1.567-3.5,3.5s1.567,3.5,3.5,3.5s7.5,0,7.5,0 V79h7V78.5z"></path><path fill="#472b29" d="M39.25,74C39.112,74,39,73.888,39,73.75c0-1.223,0.995-2.218,2.218-2.218 c0.034,0.009,0.737-0.001,1.244,0.136c0.133,0.036,0.212,0.173,0.176,0.306c-0.036,0.134-0.173,0.213-0.306,0.176 c-0.444-0.12-1.1-0.12-1.113-0.118c-0.948,0-1.719,0.771-1.719,1.718C39.5,73.888,39.388,74,39.25,74z"></path><g><path fill="#472b29" d="M32.5 78A0.5 0.5 0 1 0 32.5 79A0.5 0.5 0 1 0 32.5 78Z"></path></g><g><path fill="#472b29" d="M41,79h-3.5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5H41c1.654,0,3-1.346,3-3 c0-1.496-1.125-2.768-2.618-2.959c-0.134-0.018-0.255-0.088-0.336-0.196s-0.115-0.244-0.094-0.377C40.975,71.314,41,71.16,41,71 c0-1.654-1.346-3-3-3c-0.85,0-1.638,0.355-2.219,1c-0.125,0.139-0.321,0.198-0.5,0.148c-0.182-0.049-0.321-0.195-0.36-0.379 C34.58,67.165,33.141,66,31.5,66c-1.93,0-3.5,1.57-3.5,3.5c0,0.143,0.021,0.28,0.041,0.418c0.029,0.203-0.063,0.438-0.242,0.54 c-0.179,0.102-0.396,0.118-0.556-0.01C26.878,70.155,26.449,70,26,70c-0.966,0-1.792,0.691-1.963,1.644 c-0.048,0.267-0.296,0.446-0.569,0.405C23.314,72.025,23.16,72,23,72c-1.654,0-3,1.346-3,3s1.346,3,3,3h7.5 c0.276,0,0.5,0.224,0.5,0.5S30.776,79,30.5,79H23c-2.206,0-4-1.794-4-4s1.794-4,4-4c0.059,0,0.116,0.002,0.174,0.006 C23.588,69.82,24.711,69,26,69c0.349,0,0.689,0.061,1.011,0.18C27.176,66.847,29.126,65,31.5,65c1.831,0,3.466,1.127,4.153,2.774 C36.333,67.276,37.155,67,38,67c2.206,0,4,1.794,4,4c0,0.048-0.001,0.095-0.004,0.142C43.739,71.59,45,73.169,45,75 C45,77.206,43.206,79,41,79z"></path></g><g><path fill="#472b29" d="M35.5,78c-0.159,0-0.841,0-1,0c-0.276,0-0.5,0.224-0.5,0.5c0,0.276,0.224,0.5,0.5,0.5 c0.159,0,0.841,0,1,0c0.276,0,0.5-0.224,0.5-0.5C36,78.224,35.776,78,35.5,78z"></path></g>
  </svg>
}

function AudioIcon(){
   return <img width="22" height="22" src="https://img.icons8.com/clouds/20/high-volume.png" alt="high-volume"/>
}

function VideoIcon(){
  return <img width="22" height="22" src="https://img.icons8.com/bubbles/20/circled-play.png" alt="circled-play"/>
}

function ImageIcon(){
  return <img width="22" height="22" src="https://img.icons8.com/bubbles/22/image.png" alt="image"/>
}

function GifIcon(){
  return <img width="20" height="20" src="https://img.icons8.com/external-bearicons-flat-bearicons/20/external-GIF-file-extension-bearicons-flat-bearicons.png" alt="external-GIF-file-extension-bearicons-flat-bearicons"/>
}

function PptIcon(){
  return <img width="20" height="20" src="https://img.icons8.com/external-bearicons-outline-color-bearicons/20/external-PPT-file-extension-bearicons-outline-color-bearicons.png" alt="external-PPT-file-extension-bearicons-outline-color-bearicons"/>
}



export default function AnimatedSection() {
  const [yes, setYes] = useState(true);

  useEffect(() => {
    const svgElement:any = document.querySelector(".svg1");
    const sparkleElement:any = document.querySelector(".sparkle");

    const updateSparkleAnimation = () => {
      
      
      gsap.to(sparkleElement, {
        duration: 6,
        repeat: -1,
        ease: "power1.inOut",
        motionPath: {
          path: svgElement,
          align: svgElement,
          alignOrigin: [0.5, 0.5],
          start: 0,  // Always start at the beginning of the path
          end: 0.98,    // End at the total length of the path
          autoRotate: true
        }
      });
    };

    // Initial call to set up the animation
    updateSparkleAnimation();

    // Add a resize listener to adjust animation on SVG size change
    window.addEventListener("resize", updateSparkleAnimation);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateSparkleAnimation);
    };
  }, []);

  useEffect(() => {
    const svgElement:any = document.querySelector(".svg2");
    const sparkleElement:any = document.querySelector(".sparkle1");

    const updateSparkleAnimation = () => {
      
      
      gsap.to(sparkleElement, {
        duration: 4,
        repeat: -1,
        ease: "power1.inOut",
        motionPath: {
          path: svgElement,
          align: svgElement,
          alignOrigin: [0.5, 0.5],
          start: 0,  // Always start at the beginning of the path
          end: 0.98,    // End at the total length of the path
          autoRotate: true
        }
      });
    };

    // Initial call to set up the animation
    updateSparkleAnimation();

    // Add a resize listener to adjust animation on SVG size change
    window.addEventListener("resize", updateSparkleAnimation);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateSparkleAnimation);
    };
  }, []);
  useEffect(() => {
    const svgElement:any = document.querySelector(".svg3");
    const sparkleElement:any = document.querySelector(".sparkle2");

    const updateSparkleAnimation = () => {
      
      
      gsap.to(sparkleElement, {
        duration: 3,
        repeat: -1,
        ease: "power1.inOut",
        motionPath: {
          path: svgElement,
          align: svgElement,
          alignOrigin: [0.5, 0.5],
          start: 0,  // Always start at the beginning of the path
          end: 0.98,    // End at the total length of the path
          autoRotate: true
        }
      });
    };

    // Initial call to set up the animation
    updateSparkleAnimation();

    // Add a resize listener to adjust animation on SVG size change
    window.addEventListener("resize", updateSparkleAnimation);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateSparkleAnimation);
    };
  }, []);

 

  return (
    <section className="mt-32 flex flex-col justify-between items-center section-with-animation">
      <div className="flex bg-white justify-center font-bold px-1 text-sm rounded-full items-center shadow-lg animate-child">
        <button
          onClick={() => setYes(!yes)}
          className={`flex items-center bg-white rounded-full p-1 ${yes ? 'invert-white' : ''}`}
        >
          <Image src={starimg} alt="starimg" className="w-6 h-6" />
          What is?
        </button>
        <button
          onClick={() => setYes(!yes)}
          className={`ml-3 justify-center p-2 bg-white rounded-full items-center ${!yes ? 'invert-white' : ''}`}
        >
          How it works
        </button>
      </div>

      <p className="mt-3 flex flex-col items-center font-bold text-2xl animate-child">
  <span className="text-white">Use AI faster and more</span>
  <span className="text-white">efficiently right on your device!</span>
</p>


      <div className="m-5 wid flex mt-20 animate-child">
      <div className="relativediv w-1/5 rounded-2xl mr-3 relative reveal-animation ">
     
  <p className="absolute bottom-0 p-3 text-white text-xs font-semibold">
  Edubotix AI at the Edge: Accelerate Learning, Minimize Latency
  </p>
  <div className="horizontal_lines">
  <svg width="300" height="2" viewBox="0 0 740 2" fill="none" xmlns="http://www.w3.org/2000/svg" className="svgpath">
<path d="M0.5 1H740" stroke="white" className="svg1"/>
</svg>


<div style={sparkleStyle} className="sparkle"></div>
<svg width="300" height="2" viewBox="0 0 740 2" fill="none" xmlns="http://www.w3.org/2000/svg" className="svgpath">
<path d="M0.5 1H740" stroke="white" className="svg2"/>
</svg>

<div style={sparkleStyle} className="sparkle1"></div>
<svg width="300" height="2" viewBox="0 0 740 2" fill="none" xmlns="http://www.w3.org/2000/svg" className="svgpath">
<path d="M0.5 1H740" stroke="white" className="svg3"/>
</svg>

<div style={sparkleStyle} className="sparkle2"></div>



  </div>

  <div className="vertical_lines">
  <svg width="3" height="802" viewBox="0 0 3 602" fill="none" xmlns="http://www.w3.org/2000/svg" className="svgpath1">
<line x1="0.499997" y1="-0.00166112" x2="2.5" y2="601.998" stroke="white"/> 
</svg>
  <svg width="3" height="802" viewBox="0 0 3 602" fill="none" xmlns="http://www.w3.org/2000/svg" className="svgpath1">
<line x1="0.499997" y1="-0.00166112" x2="2.5" y2="601.998" stroke="white"/> 
</svg>
  <svg width="3" height="802" viewBox="0 0 3 602" fill="none" xmlns="http://www.w3.org/2000/svg" className="svgpath1">
<line x1="0.499997" y1="-0.00166112" x2="2.5" y2="601.998" stroke="white"/> 
</svg>
  </div>
 

</div>



        <div className="w-4/5 rounded-2xl bg-white relative h-60">
        <p
  className="reveal-animation"
  style={{
    width: '40vw',
    padding: '2rem',
    fontWeight: "bolder",
  }}
>
Edubotix empowers teachers with cutting-edge AI tools to enhance their teaching experience.
</p>
          
          <div className="     rounded-tl-3xl p-3" style={{position:'relative',
               bottom:'4rem',
               display:'flex',
               flexDirection:'column',
               width:'60vw',
               gap:'3.2rem',
              
               left:'9rem'

          }}>
            <div className="flex text-xs  right-0 relative">
              <p className="flex absolute right-0 items-center shadow-lg cursor-pointer px-2 p-1 rounded-full bg-white gap-2 slide-animation">
                <TextIcon /> Content Generation
              </p>
            </div>
            <div className="flex text-xs  relative">
              <div className="absolute right-0 flex">
                <p className="flex items-center shadow-lg cursor-pointer px-2 p-2 rounded-full bg-white gap-2 slide-animation">
                  <AudioIcon /> Audio Generation
                </p>
                <p className="flex items-center shadow-lg cursor-pointer px-2 p-2 rounded-full bg-white ml-10 gap-2 slide-animation">
                  <VideoIcon /> Video Generation
                </p>
              </div>
            </div>
            <div className="flex text-xs  ml-80">
              <p className="flex items-center shadow-lg cursor-pointer px-2 p-2  rounded-full bg-white gap-2 slide-animation">
                <ImageIcon /> Text extraction from video
              </p>
              <p className="flex items-center shadow-lg cursor-pointer px-2 p-2  rounded-full bg-white ml-10 gap-2 slide-animation">
                <GifIcon /> Text Extraction from audio 
              </p>
              <p className="flex items-center shadow-lg cursor-pointer px-2 p-2   rounded-full bg-white ml-10 gap-2 slide-animation">
                <PptIcon /> PDF Generation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const sparkleStyle:any = {
  width: "30px", // Length of the sparkle
  height: "2px", // Thickness of the sparkle
  background: "linear-gradient(to right, rgba(255, 165, 0, 0), orange, rgba(255, 165, 0, 0))", // Gradient for glowing effect
  borderRadius: "2px", // Slight rounding for smoother edges
  position: "absolute",
  right: '20%',
  boxShadow: "0 0 15px 5px rgba(255, 165, 0, 0.5)", // Glowing effect
  transform: "rotate(0deg)", // Rotation for horizontal
  zIndex: "2", // Above all other elements
};
