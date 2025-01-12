import { useEffect, useState } from "react"

function Menu2({value,css,icon}){
    let [hmopen,setHmopen]=useState(icon)   // Get hm icon
    let [clk_value,setClk_Value]=useState(null)    //To set values for sm screen

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
    }
    
    //Object to show for sm screen
    const divs={
        Softwares:
        <div className="md:hidden h-[550px] w-80 delay-150 translate-y-[170px] bg-slate-100 text-black rounded-lg transition-all duration-300 transform-gpu ease-in-out ">
            Softwares Clicked
        </div>,

        Reseller:
        <div className="md:hidden h-[550px] w-80 delay-150 translate-y-[170px] bg-slate-100 text-black rounded-lg transition-all duration-300 transform-gpu ease-in-out">
            Reseller Clicked
        </div>
        
    }
    const content=divs[clk_value] || (
        <div className="md:hidden w-80 opacity-0 delay-150 translate-y-[380px] bg-slate-100 text-black rounded-lg transition-all transform-gpu ease-in-out">
            Hello
        </div>
    )

    // CSS for lg & sm screen
    const lgscreen=`md:opacity-100 md:z-10 md:p-[10px] md:m-[10px] md:text-base md:border-none`
    const smscreen=`opacity-0 ${hmopen && 'transition-all opacity-100 duration-300 transform-gpu -translate-y-[30px] ease-in-out border-b border-slate-300 '}`

    if(icon){
        return(
            <div className="flex items-center justify-center relative">
                 <nav className={`${css}`}>
                    <a href="#" className={`${lgscreen} ${smscreen}`} onClick={()=>{click('Softwares')}}
                    onMouseEnter={()=>{moenter('Softwares')}}>Softwares</a>
                    
                    <a href="#" className={`${smscreen} delay-75  ${lgscreen}`} onClick={()=>{click('Reseller')}}
                    onMouseEnter={()=>{moenter('Reseller')}}>Reseller</a>

                    <a href="#" className={`${smscreen} delay-100 ${lgscreen}`} onClick={()=>{click('Support')}}
                    onMouseEnter={()=>{moenter('Support')}}>Support</a>
        
                    <a href="#" className={`${smscreen} delay-150 ${lgscreen}`} onClick={()=>{click('Book_a_Demo')}}
                    onMouseEnter={()=>{moenter('Book_a_Demo')}}>Book a Demo</a>
                </nav>
                <div className="absolute">
                    {content}
                </div>
            </div>
        )
    }
}

export default Menu2