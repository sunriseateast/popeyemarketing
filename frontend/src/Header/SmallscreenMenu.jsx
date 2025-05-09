import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

function SmallscreenMenu({css,icon}){
    const smscreen=`opacity-0 text-lime-500 ${icon && `transition-all opacity-100 duration-300 transform-gpu ease-in-out`}`
    let [isopen,setIsopen]=useState(false)

    useEffect(()=>{
        setIsopen(icon)
    },[icon])

    if(isopen){
        return(
            <div className="h-full w-full relative">
                <div className="grid place-items-center justify-content-center">
                    <div className={`${css}`}>
                        <Link to="/softwares" className={`${smscreen}`}>Softwares</Link>           
                        <Link to="/reseller" className={`${smscreen}`}>Reseller</Link>
                        <Link to="/support" className={`${smscreen}`}>Support</Link>
                        <Link to="/book_a_demo" className={`${smscreen}`}>Book a Demo</Link>
                    </div>      
                </div>
            </div>
        )
    }
}

export default SmallscreenMenu;