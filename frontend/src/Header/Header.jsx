import logo from "/images/logo.png"
import {useEffect, useState} from "react"
import React from 'react';
import SmallscreenMenu from "./SmallscreenMenu.jsx";
import LargescreenMenu from "./LargescreenMenu.jsx";
import {Link} from 'react-router-dom';
import {useLocation} from "react-router-dom";
import Home from "../svg/Home.jsx";

function Header({isOpen}){
    const location=useLocation()
    let [hmopen,setHmopen]=useState(false)

    useEffect(()=>{
        isOpen(hmopen)
    },[hmopen])

    useEffect(()=>{
        const pathsToMatch=['/softwares','/reseller','/support','/book_a_demo']
        const currentPath = location.pathname.toLowerCase();
        if(pathsToMatch.includes(currentPath)){
            setHmopen(false)
        }

    },[location.pathname])

    //Humburger Icon default false '='
    const HumIcon=({icon})=>{
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
        <div className={`text-slate-100 grid grid-cols-6 h-[80px] md:w-[1300px] ${hmopen===false && 'header'} rounded-xl`}>
            <div className="flex items-center justify-center col-start-1">
                <Link to="/">
                    <img className="my-[10px] mx-[10px] md:my-[0px] md:mx-[0px] cursor-pointer h-[40px] w-[70px] md:h-[50px] md:w-[100px]" src={logo} loading="lazy"/>
                </Link>
            </div>
            <div className="justify-self-end pr-6 pt-5 col-start-6 md:hidden">
                <button onTouchStart={()=>setHmopen((prev)=>!prev)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer transition duration-150 ease-in-out" fill="none" viewBox="0 0 24 24" id="hamburger">
                        <HumIcon icon={hmopen}/>
                    </svg>
                </button>
            </div>
            <div className="hidden md:grid col-start-2 col-end-6 relative content-center justify-items-center">
                <LargescreenMenu/>
            </div>
            <div className="hidden md:grid col-start-6">
                <div className="flex items-center justify-center text-zinc-500">
                    <Link to='/'>
                        <div className="h-[30px] w-[30px]">
                            <Home/>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="mt-[150px] col-start-1 col-end-7 flex items-center justify-center text-xl md:hidden">
                <SmallscreenMenu css={`grid grid-rows-4 place-items-center gap-y-[40px]`} icon={hmopen}/>
            </div>
        </div>
    )
}
export default Header