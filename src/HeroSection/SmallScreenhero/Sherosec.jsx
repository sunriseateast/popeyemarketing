import React,{useRef,useEffect} from "react";
import gsap from 'gsap';
import Testimonials2 from "./Testimonials2.jsx";
import Arrow from "../../svg/Arrow.jsx";

function Sherosec(){
    const flipwds=useRef(null)
    const elementRef=useRef(null)

    //flip word using GSAP and logic for stop userscroll
    useEffect(() => {
        const element=elementRef.current
        const handlescroll=(event)=>{
            event.preventDefault()
        }
        
        if(element){
            element.addEventListener("touchmove",handlescroll,{passive : false})
        }

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
                        value:" Softwares",
                        newClass:"animated-gradient"
                    }
                }
            )
        }

        return()=>{
            if(element){
                element.removeEventListener("touchmove",handlescroll)
            }
        }
    }, []);


    return(
        <div className="w-full relative">
            <div className="h-full w-full mt-[20px]">
                <div>
                    <p className="break-all text-[50px] leading-[1.0]">The Hub of<br/>
                        <span ref={flipwds}> Solutions</span>
                    </p>
                </div>
                <div>
                    <p className="mt-[15px] font-medium text-[15px] text-pretty text-[#DDDDDD]">As we are in this field from last 3 years we noticed that there are
                        many cases where users not getting proper <span className="text-white">SUPPORT/BUGGY</span> softwares provide by vendors.In
                        this store you will find your specific solutions.
                    </p>
                </div>
                <div>
                    <button className="bg-slate-100 text-black rounded-lg p-[10px] tracking-wider mt-[40px]">
                        <div className="flex items-center gap-x-[7px]">
                            <div>
                                <p>Free Trial</p>
                            </div>
                            <div className="max-h-[12px] max-w-[12px]">
                                <Arrow/>
                            </div>
                        </div>
                    </button>
                </div>
                <div ref={elementRef} className="max-h-[350px] mt-[25px] overflow-hidden scrollbar-none">
                    <div>
                        <Testimonials2/>
                    </div>
                </div>
                <div className="h-[350px] w-full opacity-0 bg-lime-500 absolute -translate-y-[350px]"></div> 
            </div>
        </div>
    )
}
export default Sherosec