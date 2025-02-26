function LargescreenMenu({value}){

    //Function to pass value for lg screen
    function moenter(title){
        if(value){
            value(title)
        }
    }

    const lgscreen=`md:opacity-100 md:z-10 md:p-[10px] md:m-[10px] md:text-base md:border-none`
    return(
        <nav>
            <a href="#" className={`${lgscreen}`} 
            onMouseEnter={()=>{moenter('Softwares')}}>Softwares</a>
            
            <a href="#" className={`${lgscreen}`} 
            onMouseEnter={()=>{moenter('Reseller')}}>Reseller</a>

            <a href="#" className={`${lgscreen}`} 
            onMouseEnter={()=>{moenter('Support')}}>Support</a>

            <a href="#" className={`${lgscreen}`} 
            onMouseEnter={()=>{moenter('Book_a_Demo')}}>Book a Demo</a>
        </nav>
    )
}

export default LargescreenMenu