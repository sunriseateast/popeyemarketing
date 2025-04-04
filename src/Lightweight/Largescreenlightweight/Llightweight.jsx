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


function Llightweight(){
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
        <div className="my-[150px] border border-zinc-500 rounded-xl background-lg">
            <div className="flex items-center justify-center rounded-xl background-lginner m-[50px] p-[10px]">
                <div className="grid grid-cols-2 ">
                    <div className="flex items-center mx-[150px]">
                        <div className="relative flex items-center justify-center h-[115px] w-[115px] div1 rounded-xl skew-x-[60deg] ">
                            <div ref={div2Ref} className="border border-[#3C3D37] flex items-center justify-center h-[100px] w-[100px] div2 rounded-xl">
                                <div ref={div3Ref} className="border border-[#3C3D37] flex items-center justify-center h-[90px] w-[90px] div2 rounded-xl">
                                    <div ref={flashRef} className="h-[50px] w-[50px] drop-shadow-xl skew-x-[-60deg] translate-x-[35px] -translate-y-[20px]">
                                        <Flash/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-[50px] bg-zinc-900 rounded-xl drop-shadow">
                        <p className="text-[50px]">Effortless, Lightweight <br/>Elegantly minimal</p>
                        <button className="my-[10px] bg-slate-100 text-black px-[28px] py-[9px] rounded text-lg">All Softwares</button>
                        <div className="flex space-x-[10px] my-[5px]">
                            <div className="max-h-[20px] max-w-[20px]">
                                <Windows/>
                            </div>
                            <div className="max-h-[20px] max-w-[20px]">
                                <Apple/>
                            </div>
                            <div className="max-h-[20px] max-w-[20px] flex items-centre justify-center bg-slate-100 rounded-xl">
                                <div className="max-h-[10px] max-w-[10px] text-black font-bold m-[5px]">
                                    <Arrow/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Llightweight