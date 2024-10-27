import React, {useRef} from 'react';

function Tooltip2({value}){
    let newSize=useRef()
    let prevSize=useRef()

    let size={
        Softwares:'h-[230px] w-[500px] left-32',
        Reseller: 'h-[200px] w-[300px] left-64',
        Support:'h-[200px] w-[400px] left-64',
        Book_a_Demo:'h-[200px] w-[300px] left-96'
    }

    let visible=size[value]

    if(newSize.current !== visible){
        prevSize.current=newSize.current
        newSize.current=visible
    }

    let visible2=size[value] || `${prevSize.current} scale-95 opacity-0`

    return(
        <div className={`absolute translate-y-[80px] ${visible2} bg-slate-100 duration-100 transistion-all rounded-lg ease-in-out`}></div>
    )

}

export default Tooltip2