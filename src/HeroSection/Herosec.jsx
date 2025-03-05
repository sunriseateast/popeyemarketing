import React,{useEffect,useState,useRef} from "react";
import "./HeroSection.css";
import "../components/components.css"
import Dots from "../svg/Dots";
import Check from "../svg/Check";
import gsap from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import Testimonials from "./Testimonials";

gsap.registerPlugin(TextPlugin)


function Herosec(){

    const flipwds=useRef(null)

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
                        value:"Solutions",
                        newClass:"animated-gradient"
                    }
                }
            )
        }
    }, []);

    return(
        <div className="grid grid-cols-2 h-full w-full hero bg-fixed">
            <div className="flex items-center justify-center">
                <div className="flex flex-col items-center justify-center pr-[150px]">
                    <p className="text-[24px] md:text-[70px] font-bold leading-[1.0] text-center">
                        The Hub of <span ref={flipwds}>Softwares</span>
                    </p>
                    <div className="flex space-x-[30px] text-[#78716C] mt-[28px]">
                        <div className="flex items-center justify-center rounded-xl bg-[#06040D] w-[200px]">
                            <div className="h-[20px] w-[20px] mt-[1px]">
                                <Check/>
                            </div>
                            <p className="ml-[5px] mr-[5px] text-[13px]">MORE THAN PLATFORM</p>
                            <div className="h-[10px] w-[10px]">
                                <Dots/>
                            </div>
                        </div>

                        <div className="flex items-center justify-center rounded-xl bg-[#06040D] w-[200px]">
                            <div className="h-[20px] w-[20px] mt-[1px]">
                                <Check/>
                            </div>
                            <p className="ml-[5px] mr-[5px] text-[13px]">DESIGNED FOR IMPACT</p>
                            <div className="h-[10px] w-[10px]">
                                <Dots/>
                            </div>
                        </div>
                    </div>
                    <button className='tracking-wider mt-[45px] border border-[#F5F5F4] rounded-xl p-[15px] w-[170px] h-[60px] hover:bg-[#F5F5F4] hover:text-black'>Free Trial</button>
                </div>
            </div>
            <div className="mask">
                <Testimonials/>
            </div>
        </div>
    )
}

export default Herosec