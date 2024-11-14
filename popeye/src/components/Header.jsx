import logo from "/images/logo.png"
import { useState,useEffect} from "react"
import React from 'react';
import Tooltip2 from "./Tooltip2.jsx";
import Menu2 from "./Menu2.jsx";

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
        isOpen(icon)
        if(icon){
            return(
                <>
                    <line x1="6" y1="6" x2="18" y2="18" stroke-width="2.2" stroke="white" stroke-linecap="round" className=""></line>
                    <line x1="6" y1="18" x2="18" y2="6" stroke-width="2.2" stroke="white" stroke-linecap="round" className=""></line>
                </>
            )
        }
        else{
            return(
                <>
                    <line x1="4" y1="6" x2="20" y2="6" stroke-width="2" stroke="white" stroke-linecap="round"></line>
                    <line x1="4" y1="12" x2="20" y2="12" stroke-width="2" stroke="white" stroke-linecap="round"></line>
                    <line x1="4" y1="18" x2="20" y2="18" stroke-width="2" stroke="white" stroke-linecap="round"></line>
                </>
            )
        }
    }


    //Main body
    return(
        <div className="bg-[#06040D] text-slate-100 grid grid-cols-6 h-[80px]">
            <div className="bg-lime-500 pl-3 pt-3 col-start-1 md:pt-5 md:pl-24">
                <img src={logo} className='h-10 md:h-14' loading="eager"/>
            </div>
            <div className="justify-self-end pr-5 pt-5 col-start-6 md:hidden">
                <button onClick={()=>setHmopen((prev)=>!prev)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer transition duration-150 ease-in-out" fill="none" viewBox="0 0 24 24" id="hamburger">
                        <HumIcon icon={hmopen}/>
                    </svg>
                </button>
            </div>
            <div className="hidden md:grid  col-start-2 col-end-6 relative content-center justify-items-center" onMouseLeave={leave}>
                <Menu2 value={setTiptitle} css={``} icon={true}/>
                <Tooltip2 value={tiptitle}/>
            </div>
            <div className="bg-white col-start-6">Hello</div>
            <div className="h-[400px] w-[320px] place-content-center text-xl md:hidden">
                <Menu2 css={`grid grid-row-4 place-items-center gap-y-[40px]`} icon={hmopen}/>
            </div>
        </div>
    )
}
export default Header