gsap.registerPlugin(ScrollTrigger) 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
import Rocket from "../../svg/Rocket"
import "../Hustle.css"
import Rightarr from "../../svg/Rightarr";
import { useEffect } from "react";
function Lhustel(){

    useEffect(()=>{
        const cards=gsap.utils.toArray('.hustle_cards')
        cards.forEach(card=>{
            gsap.to(card,{
                scrollTrigger:{
                    trigger:card,
                    start:"start +=500",
                },
                opacity:1,
                y:0,
            })
        })
    },[])

    return(
        <div className="flex items-center justify-center my-[90px] overflow-hidden">
            <div>
                <p className="text-[40px] font-bold my-[10px]">Hustle free Installiation
                    and Activation
                </p>
                <div className="border border-zinc-700 flex items-center justify-center max-w-[120px] rounded-[200px] bg-zinc-900 text-black p-[5px]">
                    <p className="text-center text-[15px] text-slate-100">Get Started</p>
                    <div className="h-[20px] w-[20px] text-slate-100">
                        <Rightarr/>
                    </div>
                </div>
                <div className="grid grid-cols-2 space-x-[100px]">
                    <div className="">
                        <div className="hustle_cards translate-y-[40px] opacity-0 flex flex-col my-[40px] space-y-[10px] border border-zinc-700 rounded-xl p-[20px]">
                            <p className="text-[20px] font-bold underline">Download</p>
                            <p>
                                Start your journey with a single download.<br/>
                                Install it in seconds and experience powerful features right from the start.
                            </p>
                        </div>

                        <div className="hustle_cards translate-y-[40px] opacity-0 flex flex-col my-[40px] space-y-[10px] border border-zinc-700 rounded-xl p-[20px]">
                            <p className="text-[20px] font-bold underline">Install</p>
                            <p>
                                Our installer takes care of everything for you.<br/>
                                In just a few clicks, the app will be set up and ready for action
                            </p>
                        </div>

                        <div className="hustle_cards translate-y-[40px] opacity-0 flex flex-col my-[40px] space-y-[10px] border border-zinc-700 rounded-xl p-[20px]">
                            <p className="text-[20px] font-bold underline">Simple & Friendly</p>
                            <p>You’re all set! Open the app and explore everything it has to offer.<br/>
                            From first launch to full use, the experience is designed to be effortless.</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-[125px]">
                        <div>
                            <div className="flex items-center justify-center border border-zinc-700 h-[200px] w-[200px] rounded-[30px] outer-card">
                                <div className="flex items-center justify-center bg-slate-100 h-[130px] w-[130px] rounded-[30px]">
                                    <div className="flex items-center justify-center bg-slate-200 h-[100px] w-[100px] rounded-[30px] inner-card">
                                        <div className="flex items-center justify-center bg-slate-100 h-[70px] w-[70px] rounded-[20px] inner-card-2">
                                            <div className="flex items-center justify-center h-[40px] w-[40px] bg-slate-100 inner-card-3 rounded-[12px] ">
                                                <div className="flex items-center justify-center overflow-hidden rounded-xl h-[30px] w-[30px]">
                                                    <div className="h-[18px] w-[18px] rocket">
                                                        <Rocket/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
                <div className="grid grid-cols-2 my-[50px]">
                    <div className="flex items-center justify-center">
                       <div className="bg-zinc-800 w-[300px] h-[230px] rounded-xl">
                            <div className="m-[20px]">
                                <p className="font-bold">Demo</p>
                                <p className="my-[10px]">
                                Get a firsthand look with our live demo.
                                See exactly how the platform works, explore 
                                key features, and understand the flow all in real-time.
                                </p>
                                <div className="flex my-[20px]">
                                    <button className="bg-slate-100 text-black rounded p-[10px]">Book a Demo</button>
                                </div>
                            </div>
                       </div>
                    </div>
                    <div className="flex">
                       <div className="bg-zinc-800 w-[300px] h-[230px] rounded-xl">
                            <div className="m-[20px]">
                                <p className="font-bold">Support</p>
                                <p className="my-[10px]">
                                Need help? Our support team is here 
                                for you every step of the way.
                                From setup to troubleshooting, 
                                we’ve got your back just reach out anytime.
                                </p>
                                <div className="flex my-[20px] ">
                                    <button className="bg-slate-100 text-black rounded p-[10px]">Get a Support</button>
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lhustel