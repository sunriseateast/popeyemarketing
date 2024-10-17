import logo from "/images/logo.png"
import Menu from "./Menu.jsx"
import { useState} from "react"
import React from 'react';
import Tooltip from "./Tooltip.jsx";

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
    function leave(event){
        const element = event.currentTarget; 
        const rect = element.getBoundingClientRect();
        if (event.clientY <= rect.top) {
            setTiptitle()
        }
    }
    //Function for disable tooltip when mouse leave outside of scope of tooltip
    function leave2(){
        setTiptitle()
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
        <div className="bg-[#06040D] text-white grid grid-cols-6 h-17">
            <div className="bg-lime-400 justify-self-start pl-3 pt-3 col-start-1">
                <img src={logo} className='h-10 md:h-14' loading="eager"/>
            </div>
            <div className="justify-self-end pr-5 pt-5 col-start-6 md:hidden">
                <button onClick={()=>setHmopen((prev)=>!prev)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer transition duration-150 ease-in-out" fill="none" viewBox="0 0 24 24" id="hamburger">
                        <HumIcon icon={hmopen}/>
                    </svg>
                </button>
            </div>
            <div className="bg-lime-600 hidden md:grid col-start-2 col-end-6 content-center justify-items-center" onMouseLeave={(event)=>{leave(event)}}>
                <Menu tip={setTiptitle} props={"grid grid-cols-4 gap-x-11"}/>
                <div className="relative" onMouseLeave={()=>{leave2()}}>
                    <Tooltip value={tiptitle}/>
                </div>
            </div>
            <div className="md:hidden">
                <Menu isOpen={hmopen} props={`bg-[#06040D] h-screen w-screen z-50 absolute content-center justify-items-center grid grid-row-4 gap-y-10 pb-40 text-xl font-medium bg-opacity-20`}/>
            </div>
        </div>
    )
}
export default Header