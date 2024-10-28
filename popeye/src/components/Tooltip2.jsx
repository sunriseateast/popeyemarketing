import React, {useRef} from 'react';

function Tooltip2({value}){
    let newSize=useRef()
    let prevSize=useRef()

    let newArrow=useRef()
    let prevArrow=useRef()

    //Div
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



    //Arrow
    let arrow={
        Softwares:'left-[150px] -translate-y-[5px]',
        Reseller:'left-[140px] -translate-y-[5px]',
        Support:'left-[250px] -translate-y-[5px]',
        Book_a_Demo:'left-[250px] -translate-y-[5px]'
    }

    let arrvisible=arrow[value]
    if(newArrow.current!==arrvisible){
        prevArrow.current=newArrow.current
        newArrow.current=arrvisible
    }
    let arrvisible2=arrow[value] || `${prevArrow.current}`



    return(
        <>
            <div className={`absolute translate-y-[80px] ${visible2} bg-slate-100 ${prevSize.current==undefined ? 'duration-75':'duration-300'} transistion-all rounded-lg ease-in-out`}>
                <div className={`absolute w-[15px] h-[15px] ${arrvisible2} bg-slate-100 rotate-45`}></div>
            </div>
        </>
    )

}

export default Tooltip2