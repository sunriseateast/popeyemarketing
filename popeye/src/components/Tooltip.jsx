import React from 'react';
import { useState,useEffect } from 'react';

function Tooltip({value}){
    let [tiptitle,setTiptitle]=useState('')
    
    useEffect(()=>{
        setTiptitle(value)
    },
    [value])

    console.log(tiptitle)

    if(tiptitle==''){
        return(
            <div className='opacity-0 transition-all duration-300 ease-out absolute right-0 translate-y-4'></div>
        )
    }
    
    else if(tiptitle==='Softwares'){
        return(
            <div className={`transition-all 'duration-300' ease-in-out h-24 absolute right-0 bg-white text-black w-80 h-48 mt-4 rounded-lg`}>Softwares</div>
        )
    }
    else if(tiptitle==='Reseller'){
        return(
            <div className="transition-all duration-300 ease-in-out h-32 absolute -right-24 bg-white text-black w-80 h-48 mt-4 rounded-lg">Reseller</div>
        )
    }
    else if(tiptitle==='Support'){
        return(
            <div className="transition-all duration-300 ease-in-out h-24 absolute overflow-visible -right-52 bg-white text-black w-80 h-48 mt-4 rounded-lg">Support</div>
        )
    }
    else if(tiptitle==='Book a Demo'){
        return(
            <div className="transition-all duration-300 ease-in-out h-32 absolute -right-80 bg-white text-black w-80 h-48 mt-4 rounded-lg">Book a Demo</div>
        )
    }
}
export default Tooltip