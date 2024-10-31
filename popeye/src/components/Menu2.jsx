function Menu2({value,css}){

    function moenter(title){
        if (value){
            value(title)
        }
    }

    const lgscreen=`md:opacity-100 md:z-10 md:p-[10px] md:m-[10px]`

    return(
        <nav className={`${css}`}>
            <a href="#" className={`bg-lime-500 ${lgscreen}`} 
            onMouseEnter={()=>{moenter('Softwares')}}>Softwares</a>

            <a href="#" className={`bg-amber-500 ${lgscreen}`} 
            onMouseEnter={()=>{moenter('Reseller')}}>Reseller</a>

            <a href="#" className={`bg-teal-500 ${lgscreen}`} 
            onMouseEnter={()=>{moenter('Support')}}>Support</a>

            <a href="#" className={`bg-blue-500 ${lgscreen}`}
            onMouseEnter={()=>{moenter('Book_a_Demo')}}>Book a Demo</a>
        </nav>
    )
}

export default Menu2