import { useRef ,useEffect} from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Circle from "../../svg/Circle"
import Doc from "../../svg/Doc"
import "../Idea.css"
import gsap from 'gsap';
import Rectangle from "../../svg/Rectangle";
import Danger from "../../svg/Danger";
import Bulb from "../../svg/Bulb";
gsap.registerPlugin(ScrollTrigger) 


function Lidea(){
    const circleRef=useRef(null)
    const rectangleRef=useRef(null)

    useEffect(()=>{
        let t1=gsap.timeline({
            scrollTrigger:{
                trigger:[circleRef.current,rectangleRef.current],
                start:"start +=400px",
            },
        })
        if(circleRef.current){
            t1.to(circleRef.current,{// Animate Outer Circle
                y:-20,
                ease: "power1.Out",
            }).to(".outer-circle",{
                opacity:0.1,
                repeat:-1,
                duration:1,
                yoyo:true,
                ease: "power1.inOut",
            })
        }

        if(rectangleRef.current){ // Animate Outer Rectangle
            t1.to(rectangleRef.current,{
                y:-20,
                ease: "power1.Out",
            }).to(".outer-rectangle",{
                opacity:0.1,
                repeat:-1,
                duration:1,
                yoyo:true,
                ease: "power1.inOut",
            })
        }


    },[])

    return(
        <div className="my-[100px]">
             <div className="bg-slate-100 flex items-center justify-center max-w-[120px] rounded-[200px] text-black p-[5px]">
                <p className="text-center text-[15px]">know us</p>
                <div className="h-[20px] w-[20px] mx-[4px]">
                    <Bulb/>
                </div>
            </div>
            <p className="text-[40px] font-bold my-[10px]">
                You should aware about        
            </p>
            <div className="my-[50px]">
                <div className="grid grid-cols-2">
                    <div className="overflow-hidden">
                        <div className="max-h-[350px] max-w-[400px] border border-zinc-700 rounded-[30px] overflow-hidden">
                            <div className="flex flex-col justify-center">
                                <div className="max-h-[200px] max-w-[400px] p-[100px] rounded-[30px] border-b border-zinc-700 overflow-hidden">
                                    <div  className="idea_content" ref={circleRef}>
                                        <div className="h-[350px] w-[350px] -translate-x-[80px] text-zinc-800 outer-circle">
                                            <Circle/>
                                        </div>
                                        <div className="text-zinc-800 stroke-slate-100 -translate-y-[300px]">
                                            <Circle/>
                                        </div>
                                        <div className="translate-x-[70px] -translate-y-[520px] h-[60px] w-[60px]">
                                            <Doc/>
                                        </div>
                                    </div>
                                </div>
                                <div className="mx-[20px] my-[10px]">
                                    <p className="font-semibold">Secure</p>
                                    <p className="my-[5px]">Any software you purchase then make sure its secure or not ?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden">
                        <div className="my-[20px]">
                            <p className="font-semibold text-[20px]">✅ Security You Can Trust</p>
                            <p className="my-[10px]">
                                At our store, your safety is our top priority.
                                Every software we<br/>offer goes through rigorous checks
                                for authenticity, integrity, and security.<br/>
                                We don’t just list software we verify it.
                            </p>
                            <p>
                                Our software is designed to run smoothly across systems 
                                without <br/> compromising your device’s  performance or your data privacy.<br/>
                                We prioritize clean code, stable builds, and zero bloat.
                            </p>
                        </div>
                    </div>

                    <div className="overflow-hidden mt-[100px]">
                        <div className="max-h-[350px] max-w-[400px] border border-zinc-700 rounded-[30px] overflow-hidden">
                            <div className="flex flex-col justify-center">
                                <div className="max-h-[200px] max-w-[400px] p-[100px] rounded-[30px] border-b border-zinc-700 overflow-hidden">
                                    <div  className="" ref={rectangleRef}>
                                        <div className="h-[330px] w-[330px] -translate-x-[60px] -translate-y-[100px] text-zinc-800 outer-rectangle">
                                            <Rectangle/>
                                        </div>
                                        <div className="h-[200px] w-[200px] -translate-y-[310px] text-zinc-800 stroke-slate-100">
                                            <Rectangle/>
                                        </div>
                                        <div className="h-[60px] w-[60px] -translate-y-[510px] translate-x-[70px]">
                                            <Danger/>
                                        </div>
                                    </div>
                                </div>
                                <div className="mx-[20px] my-[10px]">
                                    <p className="font-semibold">Disclaimer</p>
                                    <p className="my-[5px]">Our each software is different please read disclaimer before processed !</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden mt-[100px]">
                        <div className="my-[20px]">
                            <p className="font-semibold text-[20px]">⚠️ Important Disclaimer</p>
                            <p className="my-[10px]">
                                Each software product we offer is built for a specific purpose, <br/>audience, or platform.
                                Features, functionality, and compatibility may vary.<br/>
                            </p>
                            <p>
                                To ensure the best experience,
                                we strongly recommend reading <br/>disclaimer provided with each product before proceeding with your purchase.<br/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Lidea