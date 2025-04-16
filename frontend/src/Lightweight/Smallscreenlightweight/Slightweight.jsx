import "../Lightweight.css"
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger) 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useEffect,useRef } from "react";
import Flash from "../../svg/Flash";
import "../../HeroSection/HeroSection.css";
import Windows from "../../svg/Winodws";
import Apple from "../../svg/Apple";
import Arrow from "../../svg/Arrow";
import { Link } from "react-router-dom";

function Slightweight(){
        let div2Ref=useRef(null)
        let div3Ref=useRef(null)
        let flashRef=useRef(null)
    
        
        useEffect(()=>{
            if(div2Ref.current){
                let t1=gsap.timeline({
                    scrollTrigger:{
                        trigger:[div2Ref.current,div3Ref.current,flashRef.current],
                        start:'center +=500',
                        
                    }
                })
    
                t1.to(div2Ref.current,{
                    y:-15,
                    x:25,
                }).to(div3Ref.current,{
                    y:-12,
                    x:25,
                }).to(flashRef.current,{
                    y:-25,
                    x:48,
                    yoyo:true,
                    repeat:-1
                })
            }
        },[])
            
        return(
            <div className="my-[100px] border border-zinc-500 rounded-xl overflow-hidden background-sm">
                <div className="grid grid-rows-2 content-center justify-items-center my-[100px]">
                    <div>
                        <div className="relative flex items-center justify-center h-[110px] w-[110px] div1 rounded-xl skew-x-[60deg] ">
                            <div ref={div2Ref} className="border border-[#3C3D37] flex items-center justify-center h-[95px] w-[95px] div2 rounded-xl">
                                <div ref={div3Ref} className="border border-[#3C3D37] flex items-center justify-center h-[80px] w-[80px] div2 rounded-xl">
                                    <div ref={flashRef} className="h-[50px] w-[50px] drop-shadow-xl skew-x-[-60deg] translate-x-[35px] -translate-y-[20px]">
                                        <Flash/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-[20px] text-center">Effortless, Lightweight <br/>Elegantly minimal</p>
                        <Link to="/softwares">
                            <button className="my-[10px] bg-slate-100 text-black px-[15px] py-[5px] rounded text-lg text-[10px]">All Softwares</button>
                        </Link>
                    
                        <div className="flex space-x-[10px] my-[5px]">
                            <div className="max-h-[20px] max-w-[20px]">
                                <Windows/>
                            </div>
                            <div className="max-h-[20px] max-w-[20px]">
                                <Apple/>
                            </div>
                            <div className="max-h-[20px] max-w-[20px] flex items-center justify-center bg-slate-100 rounded-xl">
                                <div className="max-h-[10px] max-w-[10px] text-black font-bold m-[5px]">
                                    <Arrow/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Slightweight