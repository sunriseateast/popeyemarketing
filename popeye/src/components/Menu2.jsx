import { useEffect, useState } from "react"

function Menu2({value,css,icon}){
    let [hmopen,setHmopen]=useState(icon)   // Get hm icon
    let [clk_value,setClk_Value]=useState(null)    //To set values for sm screen
    let [isRendered, setIsRendered] = useState(false);

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
        setTimeout(()=>{setIsRendered(true)},700)
    }
    
    //Object to show for sm screen
    const divcss=`flex flex-col items-center justify-center bg-amber-500 space-y-[100px] h-[550px] m-[20px] rounded-lg transition-all duration-700 transform-gpu ease-in-out ${isRendered ? '' :'translate-y-[300px]'}`
    const divs={

        Softwares:
        <div className={divcss}>
            Software clicked
        </div>,
         
         Reseller:
         <div className={`flex flex-col items-center justify-center space-y-[100px] h-[550px] m-[20px] rounded-lg transition-all duration-700 transform-gpu ease-in-out ${isRendered ? '' :'translate-y-[300px]'}`}>
             Reseller clicked
         </div>
        
    }
    const content=divs[clk_value]


    // CSS for lg & sm screen
    const lgscreen=`md:opacity-100 md:z-10 md:p-[10px] md:m-[10px] md:text-base md:border-none`
    const smscreen=`opacity-0 ${hmopen && 'transition-all opacity-100 duration-300 transform-gpu -translate-y-[30px] ease-in-out border-b border-slate-300 '}`

    if(icon){
        return(
            <div className="relative">
                <div className="grid place-items-center justify-content-center">
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
                    <div className={`md:hidden absolute top-1 h-[550px] w-80 delay-150 ${clk_value ? '':'translate-y-[550px]'} bg-slate-100 text-black duration-700 rounded-lg transition-all transform-gpu ease-in-out`}>
                        {content} 
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Menu2