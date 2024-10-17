import React from 'react';

function Tooltip({value}){
    
    if(value==='Softwares'){
        return(
            <div className='transition-all  duration-300 ease-in-out h-24 absolute right-0 bg-white text-black w-80 h-48 mt-4 rounded-lg'>Softwares</div>
        )
    }
    else if(value==='Reseller'){
        return(
            <div className="transition-all duration-300 ease-in-out h-32 absolute -right-24 bg-white text-black w-80 h-48 mt-4 rounded-lg">Reseller</div>
        )
    }
    else if(value==='Support'){
        return(
            <div className="transition-all duration-300 ease-in-out h-24 absolute overflow-visible -right-52 bg-white text-black w-80 h-48 mt-4 rounded-lg">Support</div>
        )
    }
    else if(value==='Book a Demo'){
        return(
            <div className="transition-all duration-300 ease-in-out h-32 absolute -right-80 bg-white text-black w-80 h-48 mt-4 rounded-lg">Book a Demo</div>
        )
    }
}
export default Tooltip