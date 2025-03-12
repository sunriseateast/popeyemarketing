import React,{useEffect,useRef} from "react";
import "../HeroSection.css";
import "../../Header/Header.css"
import Dots from "../../svg/Dots";
import Check from "../../svg/Check";
import gsap from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import Testimonials from "./Testimonials";
import Windows from "../../svg/Windows";
import Protected from "../../svg/Protected";

gsap.registerPlugin(TextPlugin)


function Lherosec(){

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
            
            <div className="flex items-center justify-center h-full w-full">
                <div className="flex flex-col w-[500px]">
                    <p className="text-[70px] font-bold leading-[1.0]">
                        The Hub of <span ref={flipwds}>Softwares</span>
                    </p>
                    <p className="mt-[10px] font-medium text-[17px] text-pretty text-[#DDDDDD]">As we are in this field from last 3 years we noticed that there are
                    many cases where users not getting proper <span className="text-white">SUPPORT/BUGGY</span> softwares provide by vendors.In
                    this store you will find your specific solutions.</p>
                    <button className='tracking-wider mt-[40px] border border-[#F5F5F4] rounded-xl p-[15px] w-[170px] h-[60px] hover:bg-[#F5F5F4] hover:text-black'>Free Trial</button>
                </div>
            </div>
            <div className="h-full w-full mask">
                <Testimonials/>
            </div>

        </div>
    )
}

export default Lherosec