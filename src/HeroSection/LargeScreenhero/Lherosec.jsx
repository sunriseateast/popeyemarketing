import React,{useCallback, useEffect,useRef} from "react";
import "../HeroSection.css";
import "../../Header/Header.css"
import gsap from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import Testimonials from "./Testimonials";
import Arrow from "../../svg/Arrow";

gsap.registerPlugin(TextPlugin)


function Lherosec(){

    const flipwds=useRef(null)
    const arrbounce=useRef(null)
    const animationRef=useRef([])

    //flip word using GSAP
    useEffect(() => {
        if(flipwds.current){
            gsap.fromTo(flipwds.current,
                {
                    opacity:1,
                    duration:2,
                    
                },
                {
                    opacity:1,
                    duration:2,
                    delay:1.5,
                    text:{
                        value:"Softwares",
                        newClass:"animated-gradient"
                    }
                }
            )
        }

        // Animation for moving button and para upside
        if(animationRef.current[0]){
            let t1=gsap.timeline()
            t1.to(animationRef.current[0],
                {
                    y:0
                }
            ).to(animationRef.current[1],
                {
                    y:0,
                    ease: "power2.out",
                }
            )
        }
        
    }, []);

    const bounce=useCallback(()=>{
        if(arrbounce.current){
            gsap.killTweensOf(arrbounce.current)
            gsap.fromTo(arrbounce.current,        
                {
                    x:-30
                },
                {
                    x:10,
                }
        )}
    },[])

    return(
        <div className="grid grid-cols-2 content-center justify-items-center h-full w-full bg-fixed">
            <div className="flex items-center justify-center h-full w-full">
                <div className="flex flex-col w-[500px]">
                    <p className="text-[70px] font-bold leading-[1.0]">
                        The Hub of <span ref={flipwds}>Solutions</span>
                    </p>
                    <p ref={el => animationRef.current[0] = el} className="translate-y-[15px] mt-[10px] font-medium text-[17px] text-pretty text-[#DDDDDD]">As we are in this field from last 3 years we noticed that there are
                    many cases where users not getting proper <span className="text-white">SUPPORT/BUGGY</span> softwares provide by vendors.In
                    this store you will find your specific solutions.</p>
                    <div className="grid grid-cols-2 my-[50px]">
                        <div>
                            <button
                                ref={el => animationRef.current[1] = el}
                                onMouseEnter={bounce} className='translate-y-[15px] button-sh tracking-wider rounded-xl p-[15px] w-[170px] h-[60px] bg-[#F5F5F4] text-black'>
                                <div className="flex">
                                        <div className="ml-[20px]">
                                            Free Trial
                                        </div>
                                        <div className="flex items-center w-[40px] overflow-hidden">
                                            <div ref={arrbounce} className="h-[20] w-[20px] translate-x-[15px]">
                                                <Arrow/>
                                            </div>
                                        </div>
                                </div>
                            </button>
                        </div>
                        <div className="flex space-x-[20px] justify-center">
                            <div className="leading-[0.9]">
                                <span className="text-[20px] font-bold">120K</span><br/>
                                <span className="font-semibold">users</span><br/>
                                <span>target</span>
                            </div>
                            <div className="leading-[0.9]">
                                <span>✔️</span><br/>
                                <span className="text-[20px] font-bold">120+</span><br/>
                                <span className="font-semibold">users</span>
                            </div>
                            <div className="leading-[0.9]">
                                <span className="text-[20px] font-bold">select</span><br/>
                                <span className="font-semibold">your</span><br/>
                                <span>software</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center h-full w-full mask">
                <div className="h-full w-full">
                    <Testimonials/>
                </div>
            </div>
            <div className="absolute h-[550px] w-[660px] opacity-0 translate-x-[320px]"></div>
        </div>
    )
}

export default Lherosec