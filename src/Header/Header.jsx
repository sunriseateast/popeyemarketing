import logo from "/images/logo.svg"
import {useEffect, useState} from "react"
import React from 'react';
const Tooltip = React.lazy(() => import('./Tooltip.jsx'));
import SmallscreenMenu from "./SmallscreenMenu.jsx";
import LargescreenMenu from "./LargescreenMenu.jsx";


function Header({isOpen}){

    let [hmopen,setHmopen]=useState(false)
    let [tiptitle,setTiptitle]=useState(false)


    //Function listening on resize of window
    function resizewindow(){
        if(window.innerWidth>=768){
            setHmopen(false)
            setTiptitle(false)
        }  
    }
    window.addEventListener("resize",resizewindow)
    

    //Function for disable tooltip when mouse leave from top of div
    function leave(){
        setTiptitle(false) 
    }

    //Humburger Icon default false '='
    const HumIcon=({icon})=>{
        
        useEffect(()=>{
            isOpen(icon)
        },[])

        if(icon){
            return(
                <>
                    <line x1="6" y1="6" x2="18" y2="18" strokeWidth="2.2" stroke="white" strokeLinecap="round" className=""></line>
                    <line x1="6" y1="18" x2="18" y2="6" strokeWidth="2.2" stroke="white" strokeLinecap="round" className=""></line>
                </>
            )
        }
        else{
            return(
                <>
                    <line x1="4" y1="6" x2="20" y2="6" strokeWidth="2" stroke="white" strokeLinecap="round"></line>
                    <line x1="4" y1="12" x2="20" y2="12" strokeWidth="2" stroke="white" strokeLinecap="round"></line>
                    <line x1="4" y1="18" x2="20" y2="18" strokeWidth="2" stroke="white" strokeLinecap="round"></line>
                </>
            )
        }
    }


    //Main body
    return(
        <div className="bg-[#06040D] text-slate-100 grid grid-cols-6 h-[80px]">
            <div className="pl-3 pt-3 col-start-1 md:pt-5 md:pl-24 ">
                <div className="h-[50px] w-[50px]">
                   
                </div>
            </div>
            <div className="justify-self-end pr-6 pt-5 col-start-6 lg:hidden">
                <button onTouchStart={()=>setHmopen((prev)=>!prev)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer transition duration-150 ease-in-out" fill="none" viewBox="0 0 24 24" id="hamburger">
                        <HumIcon icon={hmopen}/>
                    </svg>
                </button>
            </div>
            <div className="hidden lg:grid col-start-2 col-end-6 relative content-center justify-items-center" onMouseLeave={leave}>
                <LargescreenMenu value={setTiptitle}/>
                <Tooltip value={tiptitle}/>
            </div>
            <div className="mt-[150px] col-start-1 col-end-7 flex items-center justify-center text-xl lg:hidden">
                <SmallscreenMenu css={`grid grid-rows-4 place-items-center gap-y-[40px]`} icon={hmopen}/>
            </div>
        </div>
    )
}
export default Header