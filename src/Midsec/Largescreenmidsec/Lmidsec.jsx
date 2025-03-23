import { useEffect, useRef } from "react"
import gsap from 'gsap';
import Bug from "../../svg/Bug"
import Down from "../../svg/Down"
import Wavy from "../../svg/Wavy"
import "../Midsec.css"

function Lmidsec(){
    const card2text=useRef(null)
    const filler1=useRef(null)
    const filler2=useRef(null)
    const filler3=useRef(null)
    const filler4=useRef(null)
    const timerId=useRef(null)
    const fillertimeerId=useRef(null)
    const values=["Install","Open","Start","Download"]    

    function animation(){
        let t1=gsap.timeline()
        let t2=gsap.timeline()
        let t3=gsap.timeline()
        let t4=gsap.timeline()

        if(card2text.current){
            t1.fromTo(filler1.current,
                {
                    x:-50,
                },
                {
                    x:0,
                    duration:2,
                }
            ).to(card2text.current,{
                filter:"blur(5px)",
                y:-50,
                duration:0.5,
            }).to(card2text.current,{
                onStart:()=>{
                    card2text.current.innerHTML="Install"
                },
                ease: "power2.out",
                filter:"blur(0px)",
                duration:0.5,
                y:0
            })

            if(fillertimeerId.current) clearTimeout(fillertimeerId.current)
                fillertimeerId.current=
                setTimeout(()=>{
                    t1.timeScale(2)
                },500)
        }
    }


    return(
    <div className="h-full w-full grid content-center justify-items-center px-[50px]">
        <div className="mt-[50px]">
            {/* <p className="text-center text-[40px]">What we offer to Businesses ?</p> */}
        </div>

        <div className="grid grid-cols-2 mt-[40px]">
            
            <div className="p-[40px] border-[#1D1616] hover:border-[#3C3D37] rounded-xl border-r border-b">
               <div className="bg-[#4c585b33] m-[10px] p-[22px] rounded-xl card">
                    <div className="flex items-center-justify-center">
                        <div className="bg-[#4c585b33] h-[40px] w-[40px] rounded-[10px] innercard grid content-center justify-items-center">
                            <div className="h-[25px] w-[25px]">
                                <Wavy/>
                            </div>
                        </div>
                        <p className="text-center mt-[6px] ml-[8px] tracking-wider">Reliable Softwares</p>
                    </div>
               </div>   
            </div>

            <div className="p-[40px] border-[#1D1616] hover:border-[#3C3D37] rounded-xl border-l border-b" 
            onMouseEnter={()=>{
                if (timerId.current) clearTimeout(timerId.current)
                timerId.current=setTimeout(()=>{animation()},300)
            }}>
               <div className="bg-[#4c585b33] m-[10px] p-[14px] rounded-xl card">
                    <div className="flex items-center-justify-center">
                        <div className="bg-[#4c585b33] h-[40px] w-[40px] rounded-[10px] innercard grid content-center justify-items-center">
                            <div className="h-[25px] w-[25px]">
                                <Wavy/>
                            </div>
                        </div>
                        <div className="overflow-hidden">
                            <p ref={card2text} className="text-center mt-[6px] ml-[8px] tracking-wider">Download</p>
                        </div>
                    </div>
                    <div className="mt-[10px] flex gap-x-[8px]">
                        <div className="overflow-hidden h-[7px] w-[45px] border border-[#4c585b33] rounded-xl filler">
                            <div ref={filler1} className="h-[5px] w-[46px] bg-blue-500"></div>
                        </div>
                        <div className="overflow-hidden h-[7px] w-[45px] border border-[#4c585b33] rounded-xl filler">
                            <div ref={filler2} className="h-[5px] w-[46px] bg-amber-500"></div>
                        </div>
                        <div className="overflow-hidden h-[7px] w-[45px] border border-[#4c585b33] rounded-xl filler">
                            <div ref={filler3} className="h-[5px] w-[46px] bg-pink-500"></div>
                        </div>
                        <div className="overflow-hidden h-[7px] w-[45px] border border-[#4c585b33] rounded-xl filler">
                            <div ref={filler4} className="h-[5px] w-[46px] bg-lime-500"></div>
                        </div>      
                    </div>
               </div>   
            </div>

            <div className="p-[40px] border-[#1D1616] hover:border-[#3C3D37] rounded-xl border-t border-r">
               <div className="bg-[#4c585b33] m-[10px] p-[22px] rounded-xl card">
                    <div className="flex items-center-justify-center">
                        <div className="bg-[#4c585b33] h-[40px] w-[40px] rounded-[10px] innercard grid content-center justify-items-center">
                            <div className="h-[25px] w-[25px]">
                                <Down/>
                            </div>
                        </div>
                        <p className="text-center mt-[6px] ml-[8px] tracking-wider">Clean UI</p>
                    </div>
               </div>   
            </div>
            
            <div className="p-[40px] border-[#1D1616] hover:border-[#3C3D37] rounded-xl border-l border-t">
               <div className="bg-[#4c585b33] m-[10px] p-[22px] rounded-xl card">
                    <div className="flex items-center-justify-center">
                        <div className="bg-[#4c585b33] h-[40px] w-[40px] rounded-[10px] innercard grid content-center justify-items-center">
                            <div className="h-[32px] w-[32px]">
                                <Bug/>
                            </div>
                        </div>
                        <p className="text-center mt-[6px] ml-[8px] tracking-wider">No Cheating</p>
                    </div>
               </div>   
            </div>

        </div>
    </div>
    )
}

export default Lmidsec