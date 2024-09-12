"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import di1img from "../../public/images/div1.png";
import di2img from "../../public/images/div2.png";
import di3img from "../../public/images/div3.png";

export function Dropdown() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; 
    }

    return (
        <div className="roboto_mono">
            <div className="flex border-black mt-32">
                <div className="w-1/2 flex border-black text-6xl font-bold p-5">
                    Advanced Leadership Strategies
                </div>
                <div className="w-1/2 flex border-black p-5 text-sm justify-center px-20 font-semibold text-slate-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid impedit officia repellat debitis sit perspiciatis iste veniam pariatur necessitatibus ut blanditiis doloribus veritatis explicabo facere aspernatur perferendis ipsa commodi molestias, in amet sequi a? Id perferendis voluptatum nobis iste minima!
                </div>
            </div>
            <div className="flex m-10 mt-20">
                {/* Card 1 */}
                <div className="h-72 w-1/4 relative border-black rounded-3xl mr-36"
                    style={{ background: 'linear-gradient(to top, #0a4022, #000000)' }}>
                    <p className="text-2xl text-white p-5">Adaptive Leadership Framework</p>
                    <p className="text-xs text-white p-2 opacity-40 px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <Image alt="image" src={di1img} height={200} width={200} className="p-2 w-28 h-28" />
                    <div className="absolute -bottom-10 flex justify-center bg-white items-center rounded-full border-black w-40 h-40 -right-20">
                        <div style={{ background: 'linear-gradient(to top, #0a4022, #000000)' }} className="border-black w-28 h-28 rounded-full flex justify-center items-center text-white">
                            <img width="64" height="64" src="https://img.icons8.com/hieroglyphs/64/up-right.png" alt="up-right" style={{ filter: 'invert(100%)' }} />
                        </div>
                    </div>
                </div>
                
                {/* Card 2 */}
                <div className="h-72 w-1/4 relative border-black rounded-3xl mr-36" style={{ background: 'linear-gradient(to bottom, #0a4022, #000000)' }}>
                    <Image alt="image" src={di2img} height={300} width={300} className="p-10 w-40 h-40" />
                    <p className="text-2xl text-white px-10">Adaptive Leadership Framework</p>
                    <p className="text-xs text-white p-2 opacity-40 px-10">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="absolute -top-10 flex justify-center bg-white items-center rounded-full border-black w-40 h-40 -right-20">
                        <div style={{ background: 'linear-gradient(to bottom, #0a4022, #000000)' }} className="border-black w-28 h-28 rounded-full flex justify-center items-center">
                            <img width="64" height="64" src="https://img.icons8.com/hieroglyphs/64/up-right.png" alt="up-right" style={{ filter: 'invert(100%)' }} />
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="h-72 w-1/4 relative border-black rounded-3xl" style={{ background: 'linear-gradient(to top, #4e4b25, #000000)' }}>
                    <p className="text-2xl text-white p-5">Adaptive Leadership Framework</p>
                    <p className="text-xs text-white p-2 opacity-40 px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <Image alt="image" src={di3img} height={200} width={200} className="p-2 w-28 h-28" style={{ filter: 'invert(100%)' }} />
                    <div className="absolute -bottom-10 flex justify-center bg-white items-center rounded-full border-black w-40 h-40 -right-20">
                        <div style={{ background: 'linear-gradient(to top, #4e4b25, #000000)' }} className="border-black w-28 h-28 rounded-full flex justify-center items-center">
                            <img width="64" height="64" src="https://img.icons8.com/hieroglyphs/64/up-right.png" alt="up-right" style={{ filter: 'invert(100%)' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
