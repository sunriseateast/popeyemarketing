
function Menu({isOpen,props,tip}){

    //Function to return tittle to tip
    function enter(title){
        if(tip){
            tip(title)
            
        } 
    }

    //Main body
    return(
        <nav className={props}>
            <a href="#" className={`opacity-0 ${isOpen ? 'opacity-100 transition delay-100 duration-100 ease-in-out -translate-y-6':'transition ease-in-out'} md:opacity-100 md:text-center md:hover:bg-neutral-900 rounded-lg h-[35px] md:transition-all md:duration-300 md:ease-in-out md:content-center justify-items-center`} onMouseEnter={()=>enter('Softwares')}>Softwares</a>
            <a href="#" className={`opacity-0 ${isOpen ? 'opacity-100 transition delay-150 duration-150 ease-in-out -translate-y-6':'transition ease-in-out'} md:opacity-100 md:text-center md:hover:bg-neutral-900 rounded-lg h-[35px] md:transition-all md:duration-300 md:ease-in-out md:content-center justify-items-center`} onMouseEnter={()=>enter('Reseller')}>Reseller</a>
            <a href="#" className={`opacity-0 ${isOpen ? 'opacity-100 transition delay-200 duration-200 ease-in-out -translate-y-6':'transition ease-in-out'} md:opacity-100 md:text-center md:hover:bg-neutral-900 rounded-lg h-[35px] md:transition-all md:duration-300 md:ease-in-out md:content-center justify-items-center`} onMouseEnter={()=>enter('Support')}>Support</a>
            <a href="#" className={`opacity-0 ${isOpen ? 'opacity-100 transition delay-300 duration-300 ease-in-out -translate-y-6':'transition ease-in-out'} md:opacity-100 md:text-center md:hover:bg-neutral-900 rounded-lg h-[35px] md:w-[120px] md:transition-all md:duration-300 md:ease-in-out md:content-center justify-items-center`} onMouseEnter={()=>enter('Book a Demo')}>Book a Demo</a>
        </nav>
    )
}

export default Menu