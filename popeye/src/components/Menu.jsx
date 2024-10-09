

function Menu({isOpen,props}){
    return(
        <nav className={props}>
            <a href="#" className={`opacity-0 ${isOpen ? 'opacity-100 transition delay-100 duration-100 ease-in-out -translate-y-6':'transition ease-in-out'} md:opacity-100`}>Pricing</a>
            <a href="#" className={`opacity-0 ${isOpen ? 'opacity-100 transition delay-150 duration-150 ease-in-out -translate-y-6':'transition ease-in-out'} md:opacity-100`}>Softwares</a>
            <a href="#" className={`opacity-0 ${isOpen ? 'opacity-100 transition delay-200 duration-200 ease-in-out -translate-y-6':'transition ease-in-out'} md:opacity-100`}>Reseller</a>
            <a href="#" className={`opacity-0 ${isOpen ? 'opacity-100 transition delay-300 duration-300 ease-in-out -translate-y-6':'transition ease-in-out'} md:opacity-100`}>Book a Demo</a>
        </nav>
    )
}

export default Menu