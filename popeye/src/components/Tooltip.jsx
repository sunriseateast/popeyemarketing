import React from 'react';
import { useState,useEffect } from 'react';
import whatsapp from "/images/whatsapp.png";
import data from "/images/database.png";
import sms from "/images/sms.png";

function Tooltip({value}){
    let [tiptitle,setTiptitle]=useState('')
    let [old,setOld]=useState('')

    useEffect(()=>{
        setTiptitle((prev)=>{setOld(prev)})
        setTiptitle(value)
    
    },[value])


    //CSS classes
    let outerdiv=   `transition-all ${old==='' ? 'duration-150':'duration-300'} 
                    ease-in-out absolute bg-slate-100 text-black mt-7 rounded-lg`

    let bgbox=      `absolute bg-neutral-800 rounded-lg h-[35px] -translate-y-[57px] z-0 
                    transition-all duration-1000`

    let emptydiv=   `opacity-0 transition-all duration-75 ease-in-out absolute
                    translate-y-7`

    let arrow=      `absolute bg-slate-100 -translate-y-[5px] w-[15px] h-[15px] rotate-45 
                    transition-all duration-300`


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
            <div className={`${outerdiv} h-[345px] w-[320px] right-0`}>
                <div className={`${bgbox} translate-x-[100px] w-[105px]`}></div>
                <div className={`${arrow} translate-x-[145px]`}></div>
                <div>
                    <div className='grid grid-rows-3 p-[30px] gap-y-[10px]'>

                        <div className='grid grid-cols-3 hover:bg-slate-200 rounded-lg border-b-[1px]'>
                            <div className='bg-white rounded-lg grid content-center justify-items-center w-[60px] h-[60px] m-[10px] shadow-md'>
                                <img src={whatsapp} className='w-[30px] h-[30px]'/>
                            </div>
                            <div className='col-span-2 content-center justify-items-center font-medium'>
                                <h4>Whatsapp Marketing Softwares</h4>
                            </div>
                        </div> 

                        <div className='grid grid-cols-3 hover:bg-slate-200 rounded-lg border-b-[1px]'>
                            <div className='bg-white rounded-lg grid content-center justify-items-center w-[60px] h-[60px] m-[10px] shadow-md'>
                                <img src={sms} className='w-[30px] h-[30px]'/>
                            </div>
                            <div className='col-span-2 content-center justify-items-center font-medium'>
                                <h4>SMS Softwares</h4>
                            </div>
                        </div>

                        <div className='grid grid-cols-3 hover:bg-slate-200 rounded-lg border-b-[1px]'>
                            <div className='bg-white rounded-lg grid content-center justify-items-center w-[60px] h-[60px] m-[10px] shadow-md'>
                                <img src={data} className='w-[30px] h-[30px]'/>
                            </div>
                            <div className='col-span-2 content-center justify-items-center font-medium'>
                                <h4>Data Softwares</h4>
                            </div>                                                                                                                              
                        </div> 

                        <div className='grid content-center justify-items-center '>
                            <button className='text-slate-100 bg-[#E90074] rounded-lg w-[130px] h-[35px]'>All Softwares</button>
                        </div>
                    </div>                                                                                                                                                                                                           
                </div>
            </div>
        )
    }
    else if(tiptitle==='Reseller'){
        return(
            <div className={`${outerdiv} h-32 w-[320px] -right-24`}>
                <div className={`${bgbox} translate-x-[121px] w-[95px]`}></div>
                <div className={`${arrow} translate-x-[160px]`}></div>
                <div>Reseller</div>
            </div>
        )
    }
    else if(tiptitle==='Support'){
        return(
            <div className={`${outerdiv} h-24 w-[320px] -right-52`}>
                <div className={`${bgbox} translate-x-[121px] w-[95px]`}></div>
                <div className={`${arrow} translate-x-[145px]`}></div>
                <div>Support</div>
            </div>
        )
    }
    else if(tiptitle==='Book a Demo'){
        return(
            <div className={`${outerdiv} h-32 w-[320px] -right-80`}>
                <div className={`${bgbox} translate-x-[113px] w-[128px]`}></div>
                <div className={`${arrow} translate-x-[190px]`}></div>
                <div>Book a Demo</div>
            </div>
        )
    }
}
export default Tooltip