import { useEffect, useRef } from "react"
gsap.registerPlugin(ScrollTrigger) 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
import Bug from "../../svg/Bug"
import Down from "../../svg/Down"
import Wavy from "../../svg/Wavy"
import Unlock from "../../svg/Unlock";
import "../Midsec.css"
import Card2 from "./Card2";


function Lmidsec(){
    const card2text=useRef(null)
    const lightRef=useRef(null)
    const lightref2=useRef(null)

    //Progress bar Ref's
    const filler1=useRef(null)
    const filler2=useRef(null)
    const filler3=useRef(null)
    const filler4=useRef(null)
    const timerId=useRef(null)   


    //GSAP animation for progress bar
    function animation(){
        let t1=gsap.timeline()
        let fillerref=[filler1,filler2,filler3,filler4]
        const values=["Install","Open","Start","Download"] 
        
        if(card2text.current){
            gsap.killTweensOf(card2text.current)

            for(let i = 0; i < 4; i++){
                gsap.killTweensOf(fillerref[i].current)
                t1.fromTo(fillerref[i].current,
                    {
                        x:-50,
                    },
                    {
                        x:0,
                        duration:1.2,
                        ease: "expoScale(0.5,1,inOut)",
                    }
                ).to(card2text.current,{
                    filter:"blur(5px)",
                    y:-50,
                    duration:0.4
                }).to(card2text.current,{
                    onStart:()=>{
                        card2text.current.innerHTML=values[i]
                    },
                    filter:"blur(0px)",
                    y:0,
                    duration:0.2
                })
            }
        }
    }

    useEffect(()=>{
        if(lightRef.current && lightref2.current){
            gsap.to(".light",{
                opacity:0.1,
                repeat:-1,
                duration:0.8,
            })
        }  
        
        const fades=gsap.utils.toArray('.animation')
        fades.forEach(fade=>{
            gsap.to(fade,{
                scrollTrigger:{
                    trigger:fade,
                    start:"start +=400",
                },
                opacity:1,
                y:0,
            })
        })
    },[])
    

    return(
    <div className="h-full w-full grid content-center justify-items-center px-[50px] my-[80px]">
        <div>
            <div className="animation translate-y-[40px] opacity-0 grid space-y-[30px] content-center justify-items-center mb-[100px]">
                <div ref={lightRef} className="light absolute p-[20px] -translate-x-[320px] translate-y-[15px] h-[100px] w-[100px]"></div>
                <p className="text-center text-[40px]">
                    What we offer to <span className="bg-slate-100 rounded text-black p-[10px]">Businesses</span> ?
                </p>
                <div ref={lightref2} className="light absolute p-[20px] -rotate-[180deg] -translate-y-[15px] translate-x-[310px] h-[100px] w-[100px]"></div>
                <div className="grid content-cenetr justify-items-center">
                    <p className="text-center text-[17px]">
                        We offer softwares which are 
                        reliable with less
                        <span className="text-white font-bold">
                            &nbsp;Complex UI.
                        </span>
                        </p>
                    <p className="text-center text-[17px]">
                        Our 
                        <span className="text-white font-bold">
                            &nbsp;Effort
                        </span> is to deliver the softwares 
                        that helps to solve business 
                        their daily challenges.
                    </p>
                </div>
            </div>

            <div className="animation translate-y-[40px] opacity-0 grid grid-cols-2 mb-[150px]">
                <Card2 svgPath={<Wavy/>} innerText={'Reilable Softwares'} borderCss={"border-r border-b"}/>
                <div className="p-[40px] border-[#1D1616] hover:border-[#3C3D37] rounded-xl border-l border-b" 
                onMouseEnter={()=>{
                    if (timerId.current) clearTimeout(timerId.current)
                    timerId.current=setTimeout(()=>{animation()},300)
                }}>
                <div className="bg-[#4c585b33] m-[10px] p-[7px] rounded-xl card">
                        <div className="flex items-center-justify-center">
                            <div className="bg-[#4c585b33] h-[40px] w-[40px] rounded-[10px] innercard grid content-center justify-items-center">
                                <div className="h-[23px] w-[23px]">
                                    <Unlock/>
                                </div>
                            </div>
                            <div className="overflow-hidden">
                                <p ref={card2text} className="text-center mt-[6px] ml-[8px] tracking-wider">Download</p>
                            </div>
                        </div>
                        <div className="mt-[10px] flex gap-x-[8px]">
                            <div className="flex items-center justify-center p-[10px] overflow-hidden h-[7px] w-[45px] rounded-xl scrollbar-none">
                                <div className="h-[7px] w-[40px] border border-[#4c585b33] rounded-xl mr-[5px]">
                                    <div ref={filler1} className="h-[5px] w-[39px] bg-blue-500 fillerCard1 rounded-xl"></div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center p-[10px] overflow-hidden h-[7px] w-[45px] rounded-xl scrollbar-none">
                                <div className="h-[7px] w-[40px] border border-[#4c585b33] rounded-xl mr-[5px]">
                                    <div ref={filler2} className="h-[5px] w-[39px] bg-amber-500 fillerCard2 rounded-xl"></div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center p-[10px] overflow-hidden h-[7px] w-[45px] rounded-xl scrollbar-none">
                                <div className="h-[7px] w-[40px] border border-[#4c585b33] rounded-xl mr-[5px]">
                                    <div ref={filler3} className="h-[5px] w-[39px] bg-[#FF007F] fillerCard3 rounded-xl"></div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center p-[10px] overflow-hidden h-[7px] w-[45px] rounded-xl scrollbar-none">
                                <div className="h-[7px] w-[40px] border border-[#4c585b33] rounded-xl mr-[5px]">
                                    <div ref={filler4} className="h-[5px] w-[39px] bg-lime-500 fillerCard4 rounded-xl"></div>
                                </div>
                            </div>     
                        </div>
                    </div>   
                </div>

                <Card2 svgPath={<Down/>} innerText={"Clean UI"} borderCss={"border-r border-t"}/>
                <Card2 svgPath={<Bug/>} innerText={"No Cheating"} borderCss={"border-l border-t"}/>
            </div>
        </div>
    </div>
    )
}

export default Lmidsec