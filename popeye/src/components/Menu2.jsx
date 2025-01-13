import { useEffect, useState } from "react"

function Menu2({value,css,icon}){
    let [hmopen,setHmopen]=useState(icon)   // Get hm icon
    let [clk_value,setClk_Value]=useState(null)    //To set values for sm screen
    let [openc,setOpenc]=useState(false)
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
        setIsRendered(false)
        setTimeout(()=>{setIsRendered(true)},700)
    }
    
    //Object to show for sm screen
    const divcss='md:hidden h-[550px] w-80 delay-150  bg-slate-100 text-black rounded-lg transition-all duration-700 transform-gpu ease-in-out'
    const divs={

        Softwares:
        <div className={`${divcss}`}>
            <div className={`flex flex-col items-center justify-center space-y-[100px] bg-amber-500 h-[550px] m-[15px] rounded-lg transition-all duration-700 transform-gpu ease-in-out ${isRendered ? '' :'translate-y-[300px]'}`}>

            </div>
        </div>,

        Reseller:
        <div className={`${divcss}`}>
            Reseller Clicked
        </div>,

        Support:
        <div className={`${divcss}`}>
            Support Clicked
        </div>,

        Book_a_Demo:
        <div className={`${divcss}`}>
            Book a Demo Clicked
        </div>,
        
    }
    const content=divs[clk_value] || (
        <div className="md:hidden h-[50px] w-80 delay-150 translate-y-[600px] bg-slate-100 text-black rounded-lg transition-all transform-gpu ease-in-out">
        </div>
    )


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
                    <div className="absolute flex top-0">
                        {content}
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Menu2