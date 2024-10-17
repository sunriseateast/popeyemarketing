import React, { useState } from 'react';

function Menu({isOpen,props,tip}){
    let [fortitle,setFortitle]=useState('')

    //Function to return tittle to tip
    function enter(title){
        if(tip){
            tip(title)
            setFortitle(title)
            
        } 
    }

    //Function for return empty tittle for "Softwares" and "Book a Demo" to disable tooltip
    function leave(event){
        if(tip){
            if(fortitle==='Softwares'){
                const element = event.currentTarget; // Get the element where onMouseLeave was triggered
                const rect = element.getBoundingClientRect(); // Get the element's position
                if (event.clientX <= rect.left) {
                    tip()
                } 
            }
            else if(fortitle==='Book a Demo'){
                const element = event.currentTarget; // Get the element where onMouseLeave was triggered
                const rect = element.getBoundingClientRect(); // Get the element's position
                if (event.clientX >= rect.right) {
                    tip()
                } 
            }
        }
    }

    //Main body
    return(
        <nav className={props}>
            <a href="#" className={`opacity-0 ${isOpen ? 'opacity-100 transition delay-100 duration-100 ease-in-out -translate-y-6':'transition ease-in-out'} md:opacity-100`} onMouseEnter={()=>enter('Softwares')} onMouseLeave={(event)=>{leave(event)}}>Softwares</a>
            <a href="#" className={`opacity-0 ${isOpen ? 'opacity-100 transition delay-150 duration-150 ease-in-out -translate-y-6':'transition ease-in-out'} md:opacity-100`} onMouseEnter={()=>enter('Reseller')}>Reseller</a>
            <a href="#" className={`opacity-0 ${isOpen ? 'opacity-100 transition delay-200 duration-200 ease-in-out -translate-y-6':'transition ease-in-out'} md:opacity-100`} onMouseEnter={()=>enter('Support')}>Support</a>
            <a href="#" className={`opacity-0 ${isOpen ? 'opacity-100 transition delay-300 duration-300 ease-in-out -translate-y-6':'transition ease-in-out'} md:opacity-100`} onMouseEnter={()=>enter('Book a Demo')} onMouseLeave={(event)=>{leave(event)}}>Book a Demo</a>
        </nav>
    )
}

export default Menu