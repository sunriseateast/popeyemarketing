import { useRef } from "react"
import gsap from 'gsap';
import Bug from "../../svg/Bug"
import Down from "../../svg/Down"
import Wavy from "../../svg/Wavy"
import "../Midsec.css"

function Lmidsec(){
    const card2text=useRef(null)

    function animation(){
        const values=["Download","Install","Open","Start"]
        let t1=gsap.timeline()

        if(card2text.current){
            values.map((value)=>{
                t1.to(card2text.current,
                    {
                        onStart:()=>{
                            card2text.current=value
                        },
                        y:-50
                    },
                ).to(card2text.current,
                    {
                        y:0,
                        delay:0.5
                    }
                )
            })


            // values.map((value)=>{
            //     card2text.current.innerHTML=value
            //     gsap.fromTo(card2text.current,
            //         {
            //             y : -50,
            //             filter:'blur(8px)',
            //         },
            //         {
            //             y:0,
            //             filter:'blur(0px)',
            //             ease: "power4.out",
            //         }
            //     )
            // })
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

            <div className="p-[40px] border-[#1D1616] hover:border-[#3C3D37] rounded-xl border-l border-b" onMouseEnter={animation}>
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
                        <div className="h-[7px] w-[45px] border border-[#4c585b33] rounded-xl filler">

                        </div>
                        <div className="h-[7px] w-[45px] border border-[#4c585b33] rounded-xl filler">

                        </div>
                        <div className="h-[7px] w-[45px] border border-[#4c585b33] rounded-xl filler">

                        </div>
                        <div className="h-[7px] w-[45px] border border-[#4c585b33] rounded-xl filler">

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