import { useRef } from "react"
import Card2s from "./Card2s.jsx"
import Wavy from "../../svg/Wavy.jsx"
import Unlock from "../../svg/Unlock.jsx"
import Down from "../../svg/Down.jsx"
import Bug from "../../svg/Bug.jsx"
import gsap from 'gsap';
import "../Midsec.css"

function Smidsec(){
    const card2text=useRef(null)
    const filler1=useRef(null)
    const filler2=useRef(null)
    const filler3=useRef(null)
    const filler4=useRef(null)
    const timerId=useRef(null) 
    const card1=useRef(null)
    const card2=useRef(null)
    const card3=useRef(null)
    const card4=useRef(null)

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

    function group1(){
        if(card1.current){
            gsap.to([card1.current,card3.current],{
                x:-30
            })
        }
    }

    return(
        <div className="flex flex-col h-full w-full bg-lime-500 h-full w-full">
           
                <div onTouchStart={group1} className="bg-amber-500">
                    <div className="bg-pink-500 mx-[20px] flex items-center justify-center">
                        <div  ref={card1}>
                            <Card2s innerText={"Reliable Softwares"} svgPath={<Wavy/>}/>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="bg-pink-500 mx-[20px] flex items-center justify-center">
                        <div ref={card2}>
                            <div className="p-[2px]" 
                                onTouchStart={()=>{
                                    if (timerId.current) clearTimeout(timerId.current)
                                    timerId.current=setTimeout(()=>{animation()},300)
                                }}>
                                <div className="bg-[#4c585b33] m-[10px] p-[7px] rounded-xl card w-[250px]">
                                    <div className="flex items-center-justify-center">
                                        <div className="bg-[#4c585b33] h-[40px] w-[40px] rounded-[10px] innercard grid content-center justify-items-center">
                                            <div className="max-h-[23px] max-w-[23px]">
                                                <Unlock/>
                                            </div>
                                        </div>
                                        <div className="overflow-hidden">
                                            <p ref={card2text} className="break-all text-center mt-[6px] ml-[8px] tracking-wider">Download</p>
                                        </div>
                                    </div>
                                    <div className="mt-[10px] flex gap-x-[8px] scrollbar-none flex-wrap">
                                        <div className="flex items-center justify-center overflow-hidden p-[10px] h-[7px] w-[45px] rounded-xl scrollbar-none">
                                            <div className="h-[7px] w-[40px] border border-[#4c585b33] rounded-xl mr-[5px]">
                                                <div ref={filler1} className="h-[5px] w-[39px]  bg-blue-500 fillerCard1 rounded-xl"></div>
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
                        </div>
                    </div>
                </div>

                <div className="bg-pink-500">
                    <div className="bg-amber-500 mx-[20px] flex items-center justify-center">
                        <div ref={card3}>
                            <Card2s innerText={"Clean UI"} svgPath={<Down/>}/>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="bg-amber-500 mx-[20px] flex items-center justify-center">
                        <div ref={card4}>
                            <Card2s innerText={"No Cheating"} svgPath={<Bug/>}/>
                        </div>
                    </div>
                </div>
            
        </div>
    )
}

export default Smidsec