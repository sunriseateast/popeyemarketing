import React from 'react';
import { useState,useEffect } from 'react';

function Tooltip({value}){
    let [tiptitle,setTiptitle]=useState('')
    let [old,setOld]=useState('')

    useEffect(()=>{
        setTiptitle((prev)=>{setOld(prev)})
        setTiptitle(value)
    
    },[value])

    
    if(tiptitle===''){

        //It gives fade out look to tooltip
        //Use to check if prev of tiptittle then it sets div to that value's position
        if(old==='Softwares')
        {
            return(
                <div className='opacity-0 transition-all duration-300 ease-in-out absolute right-0 translate-y-4'></div>
            )
        }
        else if(old==='Reseller'){
            return(
                <div className='opacity-0 transition-all duration-300 ease-in-out absolute -right-24 translate-y-4'></div>
            )
        }
        else if(old==='Support'){
            return(
                <div className='opacity-0 transition-all duration-300 ease-in-out absolute -right-52 translate-y-4'></div>
            )
        }
        else if(old==='Book a Demo'){
            return(
                <div className='opacity-0 transition-all duration-300 ease-in-out absolute -right-80 translate-y-4'></div>
            )
        }
    }
    
    //It shows tootlip div
    else if(tiptitle==='Softwares'){
        return(
            <div className={`transition-all ${old==='' ? 'duration-150':'duration-300'} ease-in-out h-24 absolute right-0 bg-white text-black w-80 mt-4 rounded-lg`}>Softwares</div>
        )
    }
    else if(tiptitle==='Reseller'){
        return(
            <div className={`transition-all ${old==='' ? 'duration-150':'duration-300'} ease-in-out h-32 absolute -right-24 bg-white text-black w-80 mt-4 rounded-lg`}>Reseller</div>
        )
    }
    else if(tiptitle==='Support'){
        return(
            <div className={`transition-all ${old==='' ? 'duration-150':'duration-300'} ease-in-out h-24 absolute -right-52 bg-white text-black w-80 mt-4 rounded-lg`}>Support</div>
        )
    }
    else if(tiptitle==='Book a Demo'){
        return(
            <div className={`transition-all ${old==='' ? 'duration-150':'duration-300'} ease-in-out h-32 absolute -right-80 bg-white text-black w-80 mt-4 rounded-lg`}>Book a Demo</div>
        )
    }
}
export default Tooltip