import { useEffect, useState } from "react"

function Menu2({value,css,icon}){
    let [hmopen,setHmopen]=useState(icon)
    let [arrowopen,setArrowOpen]=useState(false)

    function moenter(title){
        if(value){
            value(title)
        }
    }

    useEffect(()=>{
        setHmopen(icon)
    },[icon])

    const lgscreen=`md:opacity-100 md:z-10 md:p-[10px] md:m-[10px]`
    const smscreen=`opacity-0 ${hmopen && 'transition-all opacity-100 duration-300 transform-gpu -translate-y-[30px] ease-in-out'}`

    console.log(arrowopen)

    if(icon){
        return(
            <nav className={`${css}`}>
                <a href="#" className={`${smscreen} ${lgscreen}`} onClick={()=>setArrowOpen((prev)=>!prev)}
                onMouseEnter={()=>{moenter('Softwares')}}>Softwares</a>
                 {arrowopen && <div className="fixed">Softwares Clicked</div>}

                <a href="#" className={`${smscreen} delay-75  ${lgscreen}`} onClick={()=>setArrowOpen((prev)=>!prev)}
                onMouseEnter={()=>{moenter('Reseller')}}>Reseller</a>
                 
                <a href="#" className={`${smscreen} delay-100 ${lgscreen}`} onClick={()=>setArrowOpen((prev)=>!prev)}
                onMouseEnter={()=>{moenter('Support')}}>Support</a>
    
                <a href="#" className={`${smscreen} delay-150 ${lgscreen}`} onClick={()=>setArrowOpen((prev)=>!prev)}
                onMouseEnter={()=>{moenter('Book_a_Demo')}}>Book a Demo</a>
            </nav>
        )
    }
}

export default Menu2