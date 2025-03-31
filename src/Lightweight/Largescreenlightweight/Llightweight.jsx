import "../Lightweight.css"
import gsap from 'gsap';
import { useCallback, useEffect,useRef } from "react";
import Flash from "../../svg/Flash";
import "../../HeroSection/HeroSection.css";


function Llightweight(){
    let div2Ref=useRef(null)
    let div3Ref=useRef(null)
    let flashRef=useRef(null)

    const moving=()=>{
        let t1=gsap.timeline()
        if(div2Ref.current){
            t1.to(div2Ref.current,{
                y:-15,
                x:25,
            }).to(div3Ref.current,{
                y:-12,
                x:25,
            }).to(flashRef.current,{
                y:-25,
                x:48,
            })
        }
    }

    return(
        <div className="my-[100px]" onMouseEnter={moving}>
            <div className="flex flex-row my-[100px]">
                <div className="">
                    <div className="relative flex items-center justify-center h-[115px] w-[115px] div1 rounded-xl skew-x-[60deg] ">
                        <div ref={div2Ref} className="border border-[#3C3D37] flex items-center justify-center h-[100px] w-[100px] div2 rounded-xl">
                            <div ref={div3Ref} className="border border-[#3C3D37] flex items-center justify-center h-[90px] w-[90px] div2 rounded-xl">
                                <div ref={flashRef} className="text-lime-500 h-[50px] w-[50px] drop-shadow-xl skew-x-[-60deg] translate-x-[35px] -translate-y-[20px]">
                                    <Flash/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    Roshan
                </div>
            </div>
        </div>
    )
}

export default Llightweight