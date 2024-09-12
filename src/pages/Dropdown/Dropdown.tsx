"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import di1img from "/public/images/div1.png";
import di2img from "/public/images/div2.png";
import di3img from "/public/images/div3.png";
import "./dropdown.css"; // Import the CSS

export function Dropdown() {
    const [mounted, setMounted] = useState(false);
    const [animateCard1, setAnimateCard1] = useState(false);
    const [animateCard2, setAnimateCard2] = useState(false);
    const [animateCard3, setAnimateCard3] = useState(false);

    useEffect(() => {
        setMounted(true);

        // Trigger animations one by one with delays
        setTimeout(() => setAnimateCard1(true),0); // Card 1 after 200ms
        setTimeout(() => setAnimateCard2(true), 500); // Card 2 after 500ms
        setTimeout(() => setAnimateCard3(true), 1200); // Card 3 after 800ms
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="overflow-hidden">
            {/* Main container */}
            <div className="flex mt-[4vh] ">
                {/* Left section */}
                <div className="w-[50vw] text-[3vw] font-bold p-[2vw]">
                    Advanced Leadership Strategies
                </div>

                {/* Right section */}
                <div className="w-[50vw] text-[1vw] text-slate-400 font-semibold leading-relaxed p-[2vw] px-[4vw]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, in magni eaque reiciendis reprehenderit modi repudiandae rem, ipsa autem numquam alias nobis deleniti, optio laborum!
                </div>
            </div>

            {/* Cards section */}
            <div className="flex m-[2.5vw] mt-[3vw]">
                {/* Card 1 */}
                <div
                    className={`relative h-[38vh] w-[22vw] rounded-[1.5vw] mr-[9vw] ${animateCard1 ? 'card-animate' : 'card-initial'}`}
                    style={{ background: 'linear-gradient(to top, #0a4022, #000000)' }}
                >
                    <p className="text-[1.7vw] text-white p-[1vw]">Adaptive Leadership Framework</p>
                    <p className="text-[0.7vw] text-white opacity-40 px-[1vw]">Lorem ipsum dolor sit amet consectetur.</p>
                    <Image alt="image" src={di1img} height={200} width={200} className="w-[8vw] h-[8vw]" />
                    <div className="absolute -bottom-[5vh] flex justify-center items-center bg-white rounded-full w-[10vw] h-[10vw] -right-[5vw]">
                        <div style={{ background: 'linear-gradient(to top, #0a4022, #000000)' }} className="flex justify-center items-center text-white w-[7vw] h-[7vw] rounded-full">
                            <img width="64" height="64" src="https://img.icons8.com/hieroglyphs/64/up-right.png" alt="up-right" style={{ filter: 'invert(100%)' }} />
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div
                    className={`relative h-[38vh] w-[22vw] rounded-[1.5vw] mr-[9vw] ${animateCard2 ? 'card-animate' : 'card-initial'}`}
                    style={{ background: 'linear-gradient(to bottom, #0a4022, #000000)' }}
                >
                    <Image alt="image" src={di2img} height={300} width={300} className="w-[8vw] h-[8vw] p-[1.5vw]" />
                    <p className="text-[1.7vw] text-white px-[1vw]">Adaptive Leadership Framework</p>
                    <p className="text-[0.7vw] text-white opacity-40 p-[1vw]">Lorem ipsum dolor sit amet consectetur.</p>
                    <div className="absolute -top-[5vh] flex justify-center items-center bg-white rounded-full w-[10vw] h-[10vw] -right-[5vw]">
                        <div style={{ background: 'linear-gradient(to bottom, #0a4022, #000000)' }} className="flex justify-center items-center w-[7vw] h-[7vw] rounded-full">
                            <img width="64" height="64" src="https://img.icons8.com/hieroglyphs/64/up-right.png" alt="up-right" style={{ filter: 'invert(100%)' }} />
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div
                    className={`relative h-[38vh] w-[22vw] rounded-[1.5vw] ${animateCard3 ? 'card-animate' : 'card-initial'}`}
                    style={{ background: 'linear-gradient(to top, #4e4b25, #000000)' }}
                >
                    <p className="text-[1.7vw] text-white p-[1vw]">Adaptive Leadership Framework</p>
                    <p className="text-[0.7vw] text-white opacity-40 px-[1vw]">Lorem ipsum dolor sit amet consectetur.</p>
                    <Image alt="image" src={di3img} height={200} width={200} className="w-[8vw] p-[1vw] h-[8vw]" style={{ filter: 'invert(100%)' }} />
                    <div className="absolute -bottom-[5vh] flex justify-center items-center bg-white rounded-full w-[10vw] h-[10vw] -right-[5vw]">
                        <div style={{ background: 'linear-gradient(to top, #4e4b25, #000000)' }} className="flex justify-center items-center text-white w-[7vw] h-[7vw] rounded-full">
                            <img width="64" height="64" src="https://img.icons8.com/hieroglyphs/64/up-right.png" alt="up-right" style={{ filter: 'invert(100%)' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
