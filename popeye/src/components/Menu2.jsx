import { useEffect, useState } from "react"

function Menu2({value,css,icon}){
    let [hmopen,setHmopen]=useState(icon)   // Get hm icon
    let [clk_value,setClk_Value]=useState(false)    //To set values for sm screen
    let [arrow,setArrow]=useState(false)    //To toggle sm screen headers

    useEffect(()=>{
        setHmopen(icon)
    },[icon])


    //Function to pass value for lg screen
    function moenter(title){
        if(value){
            value(title)
        }
    }

    //Function to pass value for sm screen
    function click(value){
        setClk_Value(value)
        setArrow((prev)=>!prev)
    }
    
    //Object to show for sm screen
    const divs={
        Softwares:
        <div className="md:hidden absolute h-[120px] w-[120px] bg-slate-100 text-black">
            Softwares Clicked
        </div>
    }
    const content=divs[clk_value]


    // CSS for lg & sm screen
    const lgscreen=`md:opacity-100 md:z-10 md:p-[10px] md:m-[10px]`
    const smscreen=`opacity-0 ${hmopen && 'transition-all opacity-100 duration-300 transform-gpu -translate-y-[30px] ease-in-out'}`

    if(icon){
        return(
            <>
                 <nav className={`${css}`}>
                    <a href="#" className={`${smscreen} ${lgscreen}`} onClick={()=>{click('Softwares')}}
                    onMouseEnter={()=>{moenter('Softwares')}}>Softwares</a>
                    
                    <a href="#" className={`${smscreen} delay-75  ${lgscreen}`} onClick={()=>{click('Reseller')}}
                    onMouseEnter={()=>{moenter('Reseller')}}>Reseller</a>

                    <a href="#" className={`${smscreen} delay-100 ${lgscreen}`} onClick={()=>{click('Support')}}
                    onMouseEnter={()=>{moenter('Support')}}>Support</a>
        
                    <a href="#" className={`${smscreen} delay-150 ${lgscreen}`} onClick={()=>{click('Book_a_Demo')}}
                    onMouseEnter={()=>{moenter('Book_a_Demo')}}>Book a Demo</a>
                </nav>

                <div>
                    {arrow && content}
                </div>
            </>
        )
    }
}

export default Menu2