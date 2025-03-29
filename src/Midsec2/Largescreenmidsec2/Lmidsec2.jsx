import { useEffect,useRef } from "react";
import Arrow from "../../svg/Arrow";
import "../Midsec2.css";
import gsap from 'gsap';
import Rarrow from "../../svg/Rarrow";

function Lmidsec2(){
        const liveDot=useRef(null)
    
        useEffect(() => {
            if(liveDot.current){
                gsap.to(liveDot.current, {
                    opacity: 0.2,   
                    repeat: -1,    
                    yoyo: true,     
                    duration: 0.5,
                    ease: "power1.inOut",
                  });
            }
        }, [])

    
    return(
        <div className="flex items-center justify-center my-[100px]">
            <div className="grid grid-cols-3 gap-x-[100px]">
                <div className="overflow-hidden">
                   <div className="flex max-h-[310px] max-w-[300px] bg-[#F5F7F8] rounded-xl border border-white border-[2px]">
                        <div className="flex flex-col h-full w-full p-[5px]">
                            <div className="mt-[10px]">
                                <div className="text-black h-[60px] w-[60px] mx-[10px] bg-white rounded-xl flex items-center justify-center wabox">
                                    <div className="h-[50px] w-[50px] rounded-xl waicon flex items-center justify-center">
                                        <img src="/images/Whatsapp.png" alt="Whatsapp icon" className="max-h-[45px] max-w-[45px]" loading="lazy"/>
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
                            <div className="flex flex-col gap-y-[2px] text-zinc-500 text-[15px] rounded-xl mx-[10px] mt-[10px]">
                                <p>
                                    Whastapp marketing helps you to send bulk messages and create chatbot 
                                    with all advanced features.
                                </p>
                            </div>
                            <div className="mx-[10px] my-[50px] flex gap-x-[20px]">
                                <button className="h-[50px] w-[100px] rounded-[7px] bg-[#06040D]">Buy Now</button>
                                <button className="h-[50px] w-[100px] rounded-[7px] bg-[#06040D] button">Download</button>
                            </div>
                        </div>
                   </div>
                </div>
                <div className="overflow-hidden">
                    <div className="flex max-h-[310px] max-w-[300px] bg-[#F5F7F8] rounded-xl border border-white border-[2px]">
                        <div className="flex flex-col h-full w-full p-[5px]">
                            <div className="mt-[10px]">
                                <div className="text-black h-[60px] w-[60px] mx-[10px] bg-white rounded-xl flex items-center justify-center contactex">
                                    <div className="h-[50px] w-[50px] rounded-xl waicon flex items-center justify-center">
                                        <img src="/images/Extractor.png" alt="Contacts Export" className="max-h-[50px] max-w-[50px]" loading="lazy"/>
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
                            <div className="flex flex-col gap-y-[2px] text-zinc-500 text-[15px] rounded-xl mx-[10px] mt-[10px]">
                                <p>
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
                <div className="flex items-center justify-center overflow-hidden ">
                   <div className="">
                        <div className="flex items-center justify-center h-[60px] w-[60px] rounded-[100px] bg-zinc-500 cursor-pointer">
                            <div className="max-h-[20px] max-w-[20px]">
                                <Rarrow/>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Lmidsec2;