import React, {useRef} from 'react';
import './components.css';
import Whatsapp from '../svg/Whatsapp';
import Database from '../svg/Database';
import User from '../svg/User';
import Chat from '../svg/Chat';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';


function Tooltip2({value}){

    let newSize=useRef()
    let prevSize=useRef()

    let button=useRef()
    const { contextSafe } = useGSAP({ scope: button });


    //Div
    let size={
        Softwares:'h-[230px] w-[600px] -translate-x-[140px] ', 
        Reseller: 'h-[300px] w-[300px] -translate-x-[50px] ', 
        Support:'h-[180px] w-[310px] -translate-x-[50px]',
    }

    let visible=size[value]
    if(newSize.current !== visible){       
        prevSize.current=newSize.current
        newSize.current=visible
    }
    let visible2=size[value] || `${prevSize.current} scale-95 opacity-0`


    //Bgbox
    let boxcss=`-z-1 hover:cursor-pointer bg-zinc-400 translate-y-[21px] opacity-20 rounded transition-all ease-in-out duration-500`
    let box={
        Softwares:<div className={`absolute transform-gpu h-[38px] w-[91px] ${boxcss} -translate-x-[167px]`}></div>,
        Reseller:<div className={`absolute transform-gpu h-[38px] w-[78px] ${boxcss} -translate-x-[61px]`}></div>,
        Support:<div className={`absolute transform-gpu h-[38px] w-[76px] ${boxcss} translate-x-[37px]`}></div>,
        Book_a_Demo:<div className='absolute hover:cursor-pointer h-[38px] w-[119px] animated-gradient-border translate-x-[153px] translate-y-[21px] transition-all ease-in-out duration-500'></div>
    }

    let boxvisible=box[value]
    
    //GSAP animation for softwares
    const buttonanimationEnter = contextSafe(() => {
        if (button.current) {
            gsap.killTweensOf(button.current); // Kill any ongoing animations
            
            gsap.fromTo(button.current, 
                { 
                    backgroundImage: 'radial-gradient(circle at 0% 50%, #262626 0%, transparent 0%)',
                    color: "white",
                    border: "none"
                },
                { 
                    backgroundImage: 'radial-gradient(circle at 50% 100%, #262626 100%, transparent 0%)',
                    duration: 0.7,
                    color: "white",
                    border: "none",
                    ease: "power2.out"
                }
            );
        }
    });
    
    const buttonanimationExit = contextSafe(() => {
        if (button.current) {
            gsap.killTweensOf(button.current); // Kill any ongoing animations
            
            gsap.to(button.current, {
                backgroundImage: 'radial-gradient(circle at 0% 100%, #262626 0%, transparent 0%)',
                duration: 0.3,
                ease: "power2.in",
                onComplete: () => {
                    gsap.set(button.current, { 
                        clearProps: "backgroundImage,color,border" // Clear inline styles
                    });
                }
            });
        }
    });
    



    //Content
    let divs={
        Softwares:
        <div className='flex justify-center rounded-lg h-full'>
            <div className={`absolute transform-gpu -translate-x-[50px] -translate-y-[5px] w-[15px] h-[15px] bg-slate-100 rotate-45 transform-gpu transition-all ease-in-out`}></div>
            <div className='overflow-hidden w-full rounded-lg m-[10px]'>
                <div className='group border border-slate-200 hover:cursor-pointer hover:bg-slate-200 rounded-lg m-[10px] mt-[25px] p-[13px]'>
                    <div className='shrink-0 flex space-x-[10px] transition-all transform-gpu ease-in-out'>
                        <div className="text-black group-hover:text-[#5CB338] bg-white group-hover:shadow-sm rounded-[22px] flex items-center justify-center h-[60px] w-[60px]">
                            <div className='flex items-center justify-center h-full w-full'>
                                <div className='h-[35px] w-[35x]'>
                                    <Whatsapp className="flex"/>
                                </div>
                            </div>
                        </div>
                        <p className='whitespace-nowrap text-black font-medium mt-[17px]'>Whatsapp Marketing</p>
                    </div>
                    <p className='whitespace-nowrap mt-[9px] text-neutral-500'>Send Bulk Messages Anytime</p>
                </div>
                <div className='flex justify-start pt-[13px] m-[10px] transform-gpu transition-all ease-in-out'>
                    <nav>
                        <a href='#' className='text-neutral-400 underline underline-offset-1 hover:text-blue-500 whitespace-nowrap'>Terms & Conditions</a>
                    </nav>
                </div>
            </div>
                

                <div className='overflow-hidden w-full rounded-lg m-[10px]'>
                   <div className='group border border-slate-200 hover:cursor-pointer hover:bg-slate-200 rounded-lg m-[10px] mt-[25px] p-[13px]'>
                        <div className='flex space-x-[10px] transition-all transform-gpu ease-in-out'>
                            <div className="text-black bg-white group-hover:shadow-sm rounded-[22px] flex items-center justify-center h-[60px] w-[60px]">
                                <div className='flex items-center justify-center h-full w-full'>
                                    <div className='h-[35px] w-[35x]'>
                                        <Database className="flex"/>
                                    </div>
                                </div>
                            </div>
                            <p className='whitespace-nowrap text-black font-medium mt-[17px]'>Data Software</p>
                        </div>
                        <p className='whitespace-nowrap mt-[9px] text-neutral-500'>Scrap Genuine Data Easily</p>
                   </div>
                   <div className='flex justify-end m-[10px] transform-gpu transition-all ease-in-out'>
                        <button ref={button} className='text-neutral-800 border border-neutral-400 rounded-xl p-[8px]' onMouseEnter={buttonanimationEnter} onMouseLeave={buttonanimationExit}>All Softwares</button>
                   </div>
                </div>
            </div>,

        Reseller:
        <div className='flex justify-center h-full rounded-lg'>
            <div className={`absolute transform-gpu -translate-x-[10px] -translate-y-[5px] w-[15px] h-[15px] bg-slate-100 rotate-45 transform-gpu transition-all ease-in-out`}></div>
            <div className='flex flex-col m-[20px] space-y-[20px]'>

                <div className='overflow-hidden flex flex-col space-y-[10px]'>
                    <div className="flex items-center justify-center transition-all transform-gpu ease-in-out">
                        <div className="text-black bg-white group-hover:shadow-md rounded-[22px] flex items-center justify-center h-[60px] w-[60px]">
                            <div className='flex items-center justify-center h-full w-full'>
                                <div className='h-[35px] w-[35x]'>
                                    <User className="flex"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center overflow-hidden w-[290px]">
                        <p className='text-wrap text-neutral-500'>
                            Gain access to top-notch software solutions and 
                            earn profits by helping businesses grow...
                            <span>
                                <a href='#' className='animated-gradient'>Know More</a>
                            </span>
                        </p>
                    </div> 
                </div>


                <div className='flex flex-col space-y-[10px]'>
                    <div className='flex items-center justify-center'>
                        <button ref={button} className='text-neutral-800 border border-neutral-400 rounded-xl p-[8px] hover:bg-[#262626] hover:text-white hover:border-transparent'>Master Login</button>
                    </div>
                    <div className='flex items-center justify-center'>
                        <button ref={button} className='text-neutral-800 border border-neutral-400 rounded-xl p-[8px] hover:bg-[#262626] hover:text-white hover:border-transparent'>Reseller Login</button>
                    </div>
                </div>
            </div>
        </div>,

         Support:
        <div className='flex justify-center h-full rounded-lg '>
            <div className={`absolute transform-gpu translate-x-[110px] -translate-y-[5px] w-[15px] h-[15px] bg-slate-100 rotate-45 transform-gpu transition-all ease-in-out`}></div>
            <div className='flex items-center justify-center m-[25px] hover:cursor-pointer rounded-lg'>
                <div className='flex m-[5px] overflow-hidden gap-x-[10px]'>
                    <div className='shrink-0 transition-all transform-gpu ease-in-out'>
                        <div className="text-black bg-white group-hover:shadow-md rounded-[22px] flex items-center justify-center h-[60px] w-[60px]">
                            <div className='flex items-center justify-center h-full w-full'>
                                <div className='h-[35px] w-[35x]'>
                                    <Chat className="flex"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[200px]'>
                        <p className='text-neutral-500'>
                            Our <span className='text-black font-bold'>Dedicated Support</span> Team is here to ensure a smooth experience.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    }
    let content=divs[value]


    // Gain access to top-notch software solutions and 
    // earn profits by helping businesses grow...
    return(
        <>
            <div className={`absolute transform-gpu z-10 translate-y-[80px] ${visible2} bg-slate-100 ${newSize.current!==undefined && 'duration-300'} transition-all rounded-lg ease-in-out`}>
                {content}
            </div>
            {boxvisible}
        </>
    )

}

export default Tooltip2