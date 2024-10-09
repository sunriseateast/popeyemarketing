import logo from "/images/logo.png"
import Menu from "./Menu.jsx"
import { useState} from "react"
import React from 'react';

function Header({isOpen}){

    let [hmopen,setHmopen]=useState(false)
    
    
    function resizewindow(){
        if(window.innerWidth>=768){
            setHmopen(false)
        }  
    }
    window.addEventListener("resize",resizewindow)
    

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


    return(
        <div className="bg-[#06040D] text-white font-rubik grid grid-cols-6 h-17">
            <div className="bg-lime-400 justify-self-start pl-3 pt-3 col-start-1">
                <img src={logo} className='h-10 md:h-14' loading="eager"/>
            </div>
            <div className="bg-orange-500 justify-self-end pr-5 pt-5 col-start-6 md:hidden">
                <button onClick={()=>setHmopen((prev)=>!prev)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer transition duration-150 ease-in-out" fill="none" viewBox="0 0 24 24" id="hamburger">
                        <HumIcon icon={hmopen}/>
                    </svg>
                </button>
            </div>
            <div className="hidden bg-teal-500 md:grid gap-4 col-start-2 col-end-6 content-center justify-items-center">
                <Menu props={"grid grid-cols-4 gap-x-4"}/>
            </div>
        </div>
    )
}
export default Header