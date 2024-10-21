import React from 'react';
import { useState,useEffect } from 'react';

function Tooltip({value}){
    let [tiptitle,setTiptitle]=useState('')
    let [old,setOld]=useState('')

    useEffect(()=>{
        setTiptitle((prev)=>{setOld(prev)})
        setTiptitle(value)
    
    },[value])


    //CSS classes
    let outerdiv=   `transition-all ${old==='' ? 'duration-150':'duration-300'} 
                    ease-in-out absolute bg-white text-black w-80 mt-4 rounded-lg`

    let bgbox=      `absolute bg-neutral-800 rounded-lg h-[35px] -translate-y-[45px] z-0 
                    transition-all duration-500`

    let emptydiv=   `opacity-0 transition-all duration-300 ease-in-out absolute 
                    translate-y-4`




    if(tiptitle===''){

        //It gives fade out look to tooltip
        //Use to check if prev of tiptittle then it sets div to that value's position
        if(old==='Softwares')
        {
            return(
                <div className={`${emptydiv} right-0`}></div>
            )
        }
        else if(old==='Reseller'){
            return(
                <div className={`${emptydiv} -right-24`}></div>
            )
        }
        else if(old==='Support'){
            return(
                <div className={`${emptydiv} -right-52`}></div>
            )
        }
        else if(old==='Book a Demo'){
            return(
                <div className={`${emptydiv} -right-80`}></div>
            )
        }
    }
    
    
    //It shows tootlip div
    else if(tiptitle==='Softwares'){
        return(
            <div className={`${outerdiv} h-24 right-0`}>
                <div className={`${bgbox} translate-x-[101px] w-[105px]`}></div>
                <div>Softwares</div>
            </div>
        )
    }
    else if(tiptitle==='Reseller'){
        return(
            <div className={`${outerdiv} h-32 -right-24`}>
                <div className={`${bgbox} translate-x-[121px] w-[95px]`}></div>
                <div>Reseller</div>
            </div>
        )
    }
    else if(tiptitle==='Support'){
        return(
            <div className={`${outerdiv} h-24 -right-52`}>
                <div className={`${bgbox} translate-x-[121px] w-[95px]`}></div>
                <div>Support</div>
            </div>
        )
    }
    else if(tiptitle==='Book a Demo'){
        return(
            <div className={`${outerdiv} h-32 -right-80`}>
                <div className={`${bgbox} translate-x-[112px] w-[128px]`}></div>
                <div>Book a Demo</div>
            </div>
        )
    }
}
export default Tooltip