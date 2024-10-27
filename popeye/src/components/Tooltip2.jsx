import React, { useEffect, useRef, useState } from 'react';

function Tooltip2({value}){
    let prevsize=useRef()
    let size={
        Softwares:'h-[230px] w-[500px] left-32',
        Reseller: 'h-[200px] w-[300px] left-64',
        Support:'h-[200px] w-[400px] left-64',
        Book_a_Demo:'h-[200px] w-[300px] left-96'
    }

    let visible=size[value]

    console.log(prevsize)
    return(
        <div ref={prevsize} className={`absolute translate-y-[80px] ${visible} bg-slate-100 transistion-all duration-200 rounded-lg ease-in-out`}></div>
    )

}

export default Tooltip2