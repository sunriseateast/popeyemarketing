import React from 'react';

function Tooltip2({value}){
    let size={
        Softwares:'h-[230px] w-[500px] left-0',
        Reseller: 'h-[200px] w-[300px] left-56',
        Support:'h-[150px] w-[280px] left-80',
        Book_a_Demo:'h-[180px] w-[280px] left-1/2'
    }

    let visible= size[value] || 'scale-95'

    return(
        <div className={`absolute translate-y-[80px] ${visible} bg-slate-100 transistion-all ${visible==='scale-95' ? 'duration-75':'duration-200'} rounded-lg`}>{value}</div>
    )

}

export default Tooltip2