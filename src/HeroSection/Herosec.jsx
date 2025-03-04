import React,{useEffect,useState,useRef} from "react";
import "./HeroSection.css";
import "../components/components.css"
import Dots from "../svg/Dots";
import Check from "../svg/Check";
import gsap from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import SplitType from 'split-type'

gsap.registerPlugin(TextPlugin)


function Herosec(){

    const flipwds=useRef(null)
    // const [herowds,setHerowds]=useState([
    //     <p className="transition-all transform-gpu duration-700 ease-in-out">Softwares</p>,
    //     <p className="transition-all transform-gpu duration-700 ease-in-out ">Solutions</p>,
    //     <p className="transition-all transform-gpu duration-700 ease-in-out opacity-0 blur">Trust</p>
    // ])

    // let [herotxt,setHerotxt]=useState(herowds[0])
    // let counterRef=useRef(0)
    // const frameRef=useRef(null)
    // const lastUpdateTime=useRef(0)

    // useEffect(()=>{

    //     function fliptext(timestamp){
    //         if(timestamp - lastUpdateTime.current >= 1500){
    //             if (counterRef.current==3){
    //                 counterRef.current=0
    //             }
    //             setHerotxt(herowds[counterRef.current])
    //             setHerotxt(prev=>console.log(prev.props.className))
    //             lastUpdateTime.current=timestamp
    //             counterRef.current=counterRef.current + 1
    //         }
    //         frameRef.current=requestAnimationFrame(fliptext)
    //     }
    //     frameRef.current=requestAnimationFrame(fliptext)

    //     return(()=>{
    //         cancelAnimationFrame(frameRef.current)
    //     })

    // },[])

    useEffect(() => {

        if(flipwds.current){
            gsap.fromTo(flipwds.current,
                {
                    opacity:1,
                    duration:2,
                    
                },
                {
                    opacity:1,
                    duration:2,
                    delay:1,
                    text:{
                        value:"Solutions",
                        newClass:"animated-gradient"
                    }
                }
            )
        }
    }, []);

    return(
        <div className="fixed grid grid-cols-2 h-full w-full hero bg-fixed">
            <div className="flex items-center justify-center">
                <div className="flex flex-col items-center justify-center pr-[150px]">
                    <p className="text-[24px] md:text-[70px] font-bold leading-[1.1] text-center">
                        The Hub of <span ref={flipwds}>Softwares</span>
                    </p>
                    <div className="flex space-x-[30px] text-[#78716C] mt-[28px]">
                        <div className="flex items-center justify-center rounded-xl bg-[#06040D] w-[200px]">
                            <div className="h-[20px] w-[20px] mt-[1px]">
                                <Check/>
                            </div>
                            <p className="ml-[5px] mr-[5px] text-[13px]">MORE THAN PLATFORM</p>
                            <div className="h-[10px] w-[10px]">
                                <Dots/>
                            </div>
                        </div>

                        <div className="flex items-center justify-center rounded-xl bg-[#06040D] w-[200px]">
                            <div className="h-[20px] w-[20px] mt-[1px]">
                                <Check/>
                            </div>
                            <p className="ml-[5px] mr-[5px] text-[13px]">DESIGNED FOR IMPACT</p>
                            <div className="h-[10px] w-[10px]">
                                <Dots/>
                            </div>
                        </div>

                        {/* <div className="flex items-center justify-center rounded-xl bg-slate-100 w-[200px] border-2 border-slate-200">
                            <div className="h-[20px] w-[20px] mt-[1px]">
                                <Check/>
                            </div>
                            <p className="ml-[5px] mr-[5px] text-[13px]">BEYOND LIMITS ALWAYS</p>
                            <div className="h-[10px] w-[10px]">
                                <Dots/>
                            </div>
                        </div> */}

                        {/* <p>BEYOND JUST SOFTWARES</p>
                        <p>PLATFORM THAT LISTENS</p> */}
                    </div>
                    <button className='tracking-wider mt-[45px] border border-[#F5F5F4] rounded-xl p-[15px] w-[170px] h-[60px] hover:bg-[#F5F5F4] hover:text-black'>Free Trial</button>
                </div>
            </div>
            <div className="">
                hello
            </div>
        </div>

        // <div className="flex flex-col space-y-[50px] items-center justify-center h-full w-full hero">
        //     <div className="">
        //         <p className="text-[#78716C]">MORE THAN PLATFORM</p>
        //         <p className="text-[24px] md:text-[100px] font-bold z-10">The Hub of Softwares</p>
        //     </div>
        //     <div className='flex items-center justify-center'>
        //         <button ref={button} className='border border-[#F5F5F4] rounded-xl p-[15px] w-[170px] h-[60px] hover:bg-[#F5F5F4] hover:text-black'>All Softwares</button>
        //     </div>
        // </div>
    )
}

export default Herosec