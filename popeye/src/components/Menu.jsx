import { useEffect, useState } from "react"

function Menu({isOpen,props,tip}){
    let [hmopen,setHmopen]=useState(isOpen)

    useEffect(()=>{
        setHmopen(isOpen)
    },[isOpen])

    //Function to return tittle to tip
    function enter(title){
        if(tip){
            tip(title)
        } 
    }

    // css for large screen
    const lgscreen=`md:z-10 md:p-[10px] md:m-[10px]`

    //Main body
    return(
        <nav className={props}>
            <a href="#" className={`${hmopen ? 'transition-all delay-100 duration-100 ease-in-out -translate-y-6':'transition ease-in-out'} 
                                    ${lgscreen} bg-lime-500`} 
                                    onMouseEnter={()=>enter('Softwares')}
            >Softwares</a>


            <a href="#" className={`${hmopen ? 'transition-all delay-150 duration-150 ease-in-out -translate-y-6':'transition ease-in-out'}
                                    ${lgscreen} bg-amber-500`}
                                    onMouseEnter={()=>enter('Reseller')}
            >Reseller</a>


            <a href="#" className={`${hmopen ? 'transition-all delay-200 duration-200 ease-in-out -translate-y-6':'transition ease-in-out'}
                                    ${lgscreen} bg-teal-500`}
                                    onMouseEnter={()=>enter('Support')}
            >Support</a>


            <a href="#" className={`${hmopen ? 'transition-all delay-300 duration-300 ease-in-out -translate-y-6':'transition ease-in-out'}
                                    ${lgscreen} bg-blue-500`}
                                    onMouseEnter={()=>enter('Book_a_Demo')}
            >Book a Demo</a>
        </nav>
     
    )
}

export default Menu