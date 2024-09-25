import React, { useState ,useEffect} from "react";
import Loading from "../Loading/page";
import Navbar from "../Navbar/page";
import styles1 from "./main.module.css";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Image from "next/image";

gsap.registerPlugin(MotionPathPlugin);



const Main = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);

  const [glow, setGlow] = useState(false);

  useEffect(() => {
    const svgElement = document.querySelector(".svgpath");
    const sparkleElement = document.querySelector(".sparkle");

    const updateSparkleAnimation = () => {
      const boundingBox = svgElement.getBoundingClientRect();
      const pathLength = svgElement.getTotalLength();

      gsap.to(sparkleElement, {
        duration: 3,
        repeat: -1,  // Infinite loop of the sparkle animation
        ease: "power1.inOut",
        motionPath: {
          path: svgElement,
          align: svgElement,
          alignOrigin: [0.5, 0.5],
          start: 0.58,  // Start at this point on the path
          end: 0.98,    // End at this point
          autoRotate: true
        },
        onComplete: () => {
          setGlow(true); // Trigger the glow effect when the sparkle completes
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
    const svgElement = document.querySelector(".svgpath1");
    const sparkleElement = document.querySelector(".sparkle1");

    const updateSparkleAnimation = () => {
      const boundingBox = svgElement.getBoundingClientRect();
      
      // Ensure the new size of the SVG is considered in the motion path
      const pathLength = svgElement.getTotalLength();
      
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
  useEffect(() => {
    const svgElement = document.querySelector(".svgpath2");
    const sparkleElement = document.querySelector(".sparkle2");

    const updateSparkleAnimation = () => {
      const boundingBox = svgElement.getBoundingClientRect();
      
      // Ensure the new size of the SVG is considered in the motion path
      const pathLength = svgElement.getTotalLength();
      
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
  useEffect(() => {
    const svgElement = document.querySelector(".svgpath3");
    const sparkleElement = document.querySelector(".sparkle3");

    const updateSparkleAnimation = () => {
      const boundingBox = svgElement.getBoundingClientRect();
      
      // Ensure the new size of the SVG is considered in the motion path
      const pathLength = svgElement.getTotalLength();
      
      gsap.to(sparkleElement, {
        duration: 3,
        repeat: -1,
        ease: "power1.inOut",
        motionPath: {
          path: svgElement,
          align: svgElement,
          alignOrigin: [0.5, 0.5],
          start: 0,  // Always start at the beginning of the path
          end: 1,    // End at the total length of the path
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
    const svgElement = document.querySelector(".svgpath4");
    const sparkleElement = document.querySelector(".sparkle4");

    const updateSparkleAnimation = () => {
      const boundingBox = svgElement.getBoundingClientRect();
      
      // Ensure the new size of the SVG is considered in the motion path
      const pathLength = svgElement.getTotalLength();
      
      gsap.to(sparkleElement, {
        duration: 3,
        repeat: -1,
        ease: "power1.inOut",
        motionPath: {
          path: svgElement,
          align: svgElement,
          alignOrigin: [0.5, 0.5],
          start: 0,  // Always start at the beginning of the path
          end: 1,    // End at the total length of the path
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
    const svgElement = document.querySelector(".svgpath5");
    const sparkleElement = document.querySelector(".sparkle5");

    const updateSparkleAnimation = () => {
      const boundingBox = svgElement.getBoundingClientRect();
      
      // Ensure the new size of the SVG is considered in the motion path
      const pathLength = svgElement.getTotalLength();
      
      gsap.to(sparkleElement, {
        duration: 3,
        repeat: -1,
        ease: "power1.inOut",
        motionPath: {
          path: svgElement,
          align: svgElement,
          alignOrigin: [0.5, 0.5],
          start: 0,  // Always start at the beginning of the path
          end: 1,    // End at the total length of the path
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

  const handleAnimationComplete = () => {
    setLoadingComplete(true);
    setTimeout(() => {
      setShowMainContent(true);
    }, 500); // Short delay before showing main content
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000); // Delay before the animation starts

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.loadingContainer,
          transform: loadingComplete ? "translateY(-100%)" : "translateY(0)",
          opacity: loadingComplete ? 0 : 1,
          transition: "transform 1s ease-in-out, opacity 0.5s ease-in-out",
        }}
      >
        <Loading onAnimationComplete={handleAnimationComplete} />
      </div>
      <div
        style={{
          ...styles.mainContent,
          transform: showMainContent ? "translateY(0)" : "translateY(100%)",
          opacity: showMainContent ? 1 : 0,
          transition: "transform 1s ease-in-out, opacity 0.5s ease-in-out",
        }}
      >
        <Navbar />

        <div style={{ color: "white", marginBottom: "5rem" }}>
          <h1
      style={{
        fontSize: "3rem",
        fontWeight: "bolder",
        textAlign: "center",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 1s ease, transform 1s ease',
      }}
    >
      Inference at the Edge
    </h1>
          <p
            style={{
              width: "46vw",
              textAlign: "center",
              fontSize: "0.8rem",
              color: "gray",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 1s ease, transform 1s ease',
            }}
          >
            Boost your AI application's speed and efficiency globally by
            bringing inference closer to your users. Enjoy customization and
            cost-efficiency for a best-in-class inference.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              marginTop: "2rem",
              marginLeft: "13rem",
            }}
          >
            <button
              style={{
                height: "6vh",
                width: "7vw",
                background:
                  "radial-gradient(circle at top right, rgba(255, 165, 0, 0.5), transparent 100%)",
                borderRadius: "2rem",
                border: "none", // Optional: Remove border if not needed
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Optional: Add some shadow for depth
                backdropFilter: "blur(5px)", // Optional: For glass-like effect if desired
                fontSize: "0.6rem",
                fontWeight: "bolder",
              }}
            >
              Get started
            </button>
            <button
              style={{
                height: "6vh",
                width: "7vw",
                background: "black",
                border: "0.4px solid white",
                borderRadius: "2rem",

                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Optional: Add some shadow for depth
                backdropFilter: "blur(5px)", // Optional: For glass-like effect if desired
                fontSize: "0.6rem",
                fontWeight: "bolder",
              }}
            >
              Book Demo
            </button>
          </div>
        </div>

        {/* Updated AI Section */}
        <div className={styles1.ai}>
          <div className={styles1.mainai}>
          <h1 className={styles1.maintext}>AI</h1>
            <div className={styles1.cyliner}>
             
              <div className={styles1.cyliner1}>
              <svg width="832" height="113" viewBox="0 0 832 113" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax meet" className={styles1.svg1}>
        <g filter="url(#filter0_d_3_17)">
          <path id="svgPath" d="M828 104.5H214C156.122 104.002 176.347 30.5129 132 9.99994C86.6313 -10.9857 37.2094 9.74186 4 9.99994" stroke="white" strokeWidth="3" className="svgpath" />
        </g>
        <defs>
          <filter id="filter0_d_3_17" x="-0.00390625" y="0.115356" width="332.004" height="112.885" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_17"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_17" result="shape"/>
          </filter>
        </defs>
      </svg>

      <div  style={sparkleStyle} className="sparkle"></div>




              </div>
              <div className={styles1.cyliner1}>
              <svg width="430" height="72" viewBox="0 0 747 72" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles1.svg2}>
        <g filter="url(#filter0_d_14_34)">
          <path d="M743 63H192.337C140.43 62.7027 158.568 18.8433 118.796 6.60086C78.1075 -5.9237 33.7837 6.44683 4 6.60086" stroke="white" strokeWidth="3" className="svgpath1" />
        </g>
        <defs>
          <filter id="filter0_d_14_34" x="-0.00256348" y="0.499962" width="747.003" height="71" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_14_34" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_14_34" result="shape" />
          </filter>
        </defs>
      </svg>
      <div  style={sparkleStyle} className="sparkle1"></div>


              </div>
              <div className={styles1.cyliner1}>

              <svg width="320" height="118" viewBox="0 0 871 118" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles1.svg3}>
<g filter="url(#filter0_d_14_32)">
<path d="M867 0.999996H223.939C163.322 1.51795 184.504 77.9181 138.058 99.2437C90.5423 121.061 38.7812 99.512 4 99.2437" stroke="white" strokeWidth="7" className="svgpath2" />
</g>
<defs>
<filter id="filter0_d_14_32" x="-0.00384521" y="0.499992" width="871.004" height="117" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_14_32"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_14_32" result="shape"/>
</filter>
</defs>
</svg>
<div  style={sparkleStyle} className="sparkle2"></div>

              </div>
              
            </div>
            <div className={styles1.cyliner4}>
              <div className={styles1.cyliner1}>
                



              </div>
              <div className={styles1.cyliner1}>
              <svg
  width="480"
  height="118"
  viewBox="0 0 871 118"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className={styles1.svg7}
  transform="rotate(180)" /* Rotating the entire SVG by 180 degrees */
>
  <g filter="url(#filter0_d_14_32)">
    <path
      d="M867 0.999996H223.939C163.322 1.51795 184.504 77.9181 138.058 99.2437C90.5423 121.061 38.7812 99.512 4 99.2437"
      stroke="white"
      strokeWidth="7"
      className="svgpath4" 
    />
  </g>
  <defs>
    <filter
      id="filter0_d_14_32"
      x="-0.00384521"
      y="0.499992"
      width="871.004"
      height="117"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dy="4" />
      <feGaussianBlur stdDeviation="2" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
      />
      <feBlend
        mode="normal"
        in2="BackgroundImageFix"
        result="effect1_dropShadow_14_32"
      />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="effect1_dropShadow_14_32"
        result="shape"
      />
    </filter>
  </defs>
</svg>
<div  style={sparkleStyle} className="sparkle4"></div>

              </div>
              <div className={styles1.cyliner1}>

              <svg
  width="358"
  height="200"
  viewBox="0 0 871 118"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className={styles1.svg8}
  transform="rotate(180)" // Rotates the entire SVG
>
  <g filter="url(#filter0_d_14_32)">
    <path
      d="M867 0.999996H223.939C163.322 1.51795 184.504 77.9181 138.058 99.2437C90.5423 121.061 38.7812 99.512 4 99.2437"
      stroke="white"
      strokeWidth="7"
      className="svgpath5" 
    />
  </g>
  <defs>
    <filter
      id="filter0_d_14_32"
      x="-0.00384521"
      y="0.499992"
      width="871.004"
      height="117"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dy="4" />
      <feGaussianBlur stdDeviation="2" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
      />
      <feBlend
        mode="normal"
        in2="BackgroundImageFix"
        result="effect1_dropShadow_14_32"
      />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="effect1_dropShadow_14_32"
        result="shape"
      />
    </filter>
  </defs>
</svg>
<div  style={sparkleStyle} className="sparkle5"></div>

              </div>
              <svg
  width="360"
  height="72"
  viewBox="0 0 747 72"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className={styles1.svg6}
  transform="rotate(180)" 
>
  <g filter="url(#filter0_d_14_34)">
    <path
      d="M743 63H192.337C140.43 62.7027 158.568 18.8433 118.796 6.60086C78.1075 -5.9237 33.7837 6.44683 4 6.60086"
      stroke="white"
      strokeWidth="6"
      className="svgpath3" 
    />
  </g>
  <defs>
    <filter
      id="filter0_d_14_34"
      x="-0.00256348"
      y="0.499962"
      width="747.003"
      height="71"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dy="4" />
      <feGaussianBlur stdDeviation="2" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
      />
      <feBlend
        mode="normal"
        in2="BackgroundImageFix"
        result="effect1_dropShadow_14_34"
      />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="effect1_dropShadow_14_34"
        result="shape"
      />
    </filter>
  </defs>
</svg>
<div  style={sparkleStyle} className="sparkle3"></div>

            </div>
          </div>
          <div className={styles1.sideai}>
            <div className={styles1.box1}>
              <img src="/openai.svg" alt="loading-image" className="w-10" style={{ filter: 'invert(1)' }} />
            </div>
            <div className={styles1.box2}>
            <img src="/s.svg" alt="loading-image" className="w-6" style={{ filter: 'invert(1)' }} />
            </div>
            <div className={styles1.box3}>
            <img src="/gemini.svg" alt="loading-image" className="w-8" />
            </div>
          </div>

          <div className={styles1.sideai1}>
            <div className={styles1.box1}>
            <img src="/pdf.svg" alt="loading-image" className="w-8" />
            </div>
            <div className={styles1.box2}>
            <img src="/eleven.svg" alt="loading-image" className="w-7"  style={{filter:'invert(1)'}}/>
            </div>
            <div className={styles1.box3}>
            <img src="/ml.svg" alt="loading-image" className="w-9"  style={{filter:'invert(1)'}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const sparkleStyle = {
  width: "30px", // Length of the arrow
  height: "2px", // Thickness of the arrow
  background: "linear-gradient(to right, rgba(255, 165, 0, 0), orange, rgba(255, 165, 0, 0))", // Gradient from transparent to orange to transparent
  borderRadius: "2px", // Slight rounding for smoother edges
  position: "absolute",
  right: '20%',
  boxShadow: "0 0 15px 5px rgba(255, 165, 0, 0.5)", // Glowing effect
  transform: "rotate(0deg)", // You can rotate this if needed
  zIndex: "2", // Ensures it appears above other elements
};


const styles = {
  container: {
    position: "relative",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    backgroundColor: "black",
  },
  loadingContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  mainContent: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: `
      radial-gradient(circle at top right, rgba(255, 165, 0, 0.5), transparent 30%),
      linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px) 0 0 / 100px 100%,
      linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px) 0 0 / 100% 100px
    `,
    backgroundSize: "cover",
  },
};

export default Main;
