import React,{useRef} from "react";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import "./HeroSection.css"

function Herosec(){
    let button = useRef();
    const { contextSafe } = useGSAP({scope:button}) 

        //GSAP animation for softwares
        const buttonanimationEnter = contextSafe(() => {
            if (button.current) {
                gsap.killTweensOf(button.current); // Kill any ongoing animations
                
                gsap.fromTo(button.current, 
                    { 
                        backgroundImage: 'radial-gradient(circle at 0% 50%, #F5F5F4 0%, transparent 0%)',
                        color: "#262626",
                        border: "transparent"
                    },
                    { 
                        backgroundImage: 'radial-gradient(circle at 50% 100%, #F5F5F4 100%, transparent 0%)',
                        duration: 0.7,
                        color: "#262626",
                        border: "transparent",
                        ease: "power2.out"
                    }
                );
            }
        });
        
        const buttonanimationExit = contextSafe(() => {
            if (button.current) {
                gsap.killTweensOf(button.current); // Kill any ongoing animations
                
                gsap.to(button.current, {
                    backgroundImage: 'radial-gradient(circle at 0% 100%, #F5F5F4 0%, transparent 0%)',
                    ease: "power2.in",
                    onComplete: () => {
                        gsap.set(button.current, { 
                            clearProps: "color,backgroundImage,border" // Clear inline styles
                        });
                    }
                });
            }
        });

    return(
        <div className="flex flex-col space-y-[50px] items-center justify-center h-full w-full hero">
            <div className="z-0">
                <p className="text-[#78716C]">MORE THAN PLATFORM</p>
                <p className="text-[24px] md:text-[100px] font-bold z-10">The Hub of Softwares</p>
                <div className="absolute flex flex-wrap justify-end space-x-[10px] space-y-[10px] top-0 right-0 h-full w-full overflow-hidden cut">
                    {Array(200).fill(null).map(() => (
                        <div className="border border-[#78716C] h-[55px] w-[55px]"></div>
                    ))}
                </div>
            </div>
            <div className='flex items-center justify-center z-10'>
                <button ref={button} className='border border-[#F5F5F4] rounded-xl p-[15px] w-[170px] h-[60px]' onMouseEnter={buttonanimationEnter} onMouseLeave={buttonanimationExit}>All Softwares</button>
            </div>
        </div>
    )
}

export default Herosec