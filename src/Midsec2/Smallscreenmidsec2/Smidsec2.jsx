import { useCallback, useEffect,useRef } from "react";
import Arrow from "../../svg/Arrow";
import Play from "../../svg/Play"
import "../Midsec2.css";
import gsap from 'gsap';
import Rarrow from "../../svg/Rarrow";


function Smidsec2(){
    const liveDot=useRef(null)
    const upCard=useRef(null)
    const upCard2=useRef(null)

    useEffect(() => {

        // Anmination for live dot
        if(liveDot.current){
            gsap.to(liveDot.current, {
                opacity: 0.2,   
                repeat: -1,    
                yoyo: true,     
                duration: 0.4,
                ease: "power1.inOut",
              });
        }
    }, [])


    // Animation for moving card upward and downward
    const upcard=useCallback((card)=>{
        if(card){
            gsap.killTweensOf(card)
            gsap.to(card,{
                y:-10,
                ease: "sine.out",
            })
        }
    },[])

    const downcard=useCallback((card)=>{
        if(card){
            gsap.killTweensOf(card)
            gsap.to(card,{
                y:0,
                ease: "sine.out",
            })
        }
    },[])

return(
    <div className="flex items-center justify-center my-[100px]">
        <div>
            <div className="p-[5px] flex items-center justify-center space-x-[10px] max-w-[100px] rounded-[200px] bg-slate-100 text-black">
                <div className="p-[5px] flex items-center justify-center bg-white drop-shadow rounded-[200px] max-h-[20px] max-w-[20px]">
                    <div className="max-h-[8px] max-w-[8px]">
                        <Play/>
                    </div>
                </div>
                <p className="text-center text-[10px] break-all">Book a Demo</p>
            </div>
            <p className="text-[20px] font-bold my-[10px] break-all">Types of Softwares we provide</p>
            <div className="grid grid-rows-2 gap-y-[100px] mt-[50px]">
                <div ref={upCard} className="overflow-hidden transform-gpu" onTouchStart={()=>upcard(upCard.current)} onTouchEnd={()=>downcard(upCard.current)}>
                <div className="flex max-h-[310px] max-w-[300px] bg-[#F5F7F8] rounded-xl border border-white border-[2px]">
                        <div className="flex flex-col h-full w-full p-[5px]">
                            <div className="mt-[10px]">
                                <div className="text-black max-h-[60px] max-w-[60px] mx-[10px] bg-white rounded-xl flex items-center justify-center wabox">
                                    <div className="max-h-[50px] max-w-[50px] rounded-xl waicon flex items-center justify-center my-[10px]">
                                        <img src="/images/Whatsapp.png" alt="Whatsapp icon" className="w-12 h-12 object-contain" loading="lazy"/>
                                    </div>  
                                </div>
                            </div>
                            <div className="mx-[10px] mt-[10px] flex gap-x-[8px]">
                                <p className="text-black text-[20px] font-semibold">Whatsapp Marketing</p>
                                <div className="mt-[7px] rounded-xl h-[20px] w-[20px] bg-white drop-shadow-sm flex items-center justify-center">
                                    <div className="max-h-[10px] max-w-[10px] text-black">
                                        <Arrow/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-[2px] text-zinc-500 rounded-xl mx-[10px] mt-[10px]">
                                <p className="text-[15px]">
                                    Whastapp marketing helps you to send bulk messages and create chatbot 
                                    with all advanced features.
                                </p>
                            </div>
                            <div className="mx-[10px] my-[50px] flex gap-x-[20px]">
                                <button className="h-12 w-24 rounded-md bg-[#06040D]">Buy Now</button>
                                <button className="h-12 w-24 rounded-md bg-[#06040D] button">Download</button>
                            </div>
                        </div>
                </div>
                </div>
                <div ref={upCard2} className="overflow-hidden transform-gpu" onTouchStart={()=>upcard(upCard2.current)} onTouchEnd={()=>downcard(upCard2.current)}>
                    <div className="flex max-h-[310px] max-w-[300px] bg-[#F5F7F8] rounded-xl border border-white border-[2px]">
                        <div className="flex flex-col h-full w-full p-[5px]">
                            <div className="mt-[10px]">
                                <div className="text-black max-h-[60px] max-w-[60px] mx-[10px] bg-white rounded-xl flex items-center justify-center contactex">
                                    <div className="max-h-[50px] max-w-[50px] rounded-xl waicon flex items-center justify-center my-[10px]">
                                        <img src="/images/Extractor.png" alt="Contacts Export" className="h-12 w-12 object-contain" loading="lazy"/>
                                    </div>  
                                </div>
                            </div>
                            <div className="mx-[10px] mt-[10px] flex gap-x-[8px]">
                                <p className="text-black text-[20px] font-semibold">Contacts Exporter</p>
                                <div className="mt-[7px] rounded-xl h-[20px] w-[20px] bg-white drop-shadow-sm flex items-center justify-center">
                                    <div className="max-h-[10px] max-w-[10px] text-black">
                                        <Arrow/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-[2px] text-zinc-500 rounded-xl mx-[10px] mt-[10px]">
                                <p className="text-[15px]">
                                    Export contacts from your phone and 
                                    <span className="text-[#6EC207] font-semibold">&nbsp;Whatsapp</span>,
                                    get
                                    <span className="">
                                        &nbsp;live&nbsp;
                                        <span ref={liveDot} className="transform-gpu absolute -translate-x-[5px] h-[6px] w-[6px] bg-red-500 rounded-full live"></span>
                                    </span> 
                                    syncing with google sheet.
                                </p>
                            </div>
                            <div className="mx-[10px] my-[50px] flex gap-x-[20px]">
                                <button className="h-[50px] w-[100px] rounded-[7px] bg-[#06040D]">Buy Now</button>
                                <button className="h-[50px] w-[100px] rounded-[7px] bg-[#06040D] button">Download</button>
                            </div>
                        </div>
                </div>
                </div>
                <div className="flex items-center justify-center overflow-hidden">
                    <a href="https://www.google.com/">
                        <div className="flex items-center justify-center max-h-[60px] max-w-[60px] rounded-[100px] bg-zinc-500">
                            <div className="max-h-[20px] max-w-[20px] m-[20px]">
                                <Rarrow/>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
)
}
export default Smidsec2