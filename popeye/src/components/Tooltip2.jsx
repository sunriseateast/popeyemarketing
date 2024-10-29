import React, {useRef} from 'react';

function Tooltip2({value}){
    let newSize=useRef()
    let prevSize=useRef()

    let newArrow=useRef()
    let prevArrow=useRef()


    //Div
    let size={
        Softwares:'h-[230px] w-[500px] -translate-x-[70px]', 
        Reseller: 'h-[200px] w-[400px] -translate-x-[50px]', 
        Support:'h-[200px] w-[300px] -translate-x-[50px]',
        Book_a_Demo:'h-[150px] w-[300px] translate-x-[70px]'
    }

    let visible=size[value]
    if(newSize.current !== visible){       
        prevSize.current=newSize.current
        newSize.current=visible
    }
    let visible2=size[value] || `${prevSize.current} scale-95 opacity-0`



    //Arrow
    let arrow={
        Softwares:'translate-x-[150px] -translate-y-[5px]',
        Reseller:'translate-x-[185px] -translate-y-[5px]',
        Support:'translate-x-[230px] -translate-y-[5px]',
        Book_a_Demo:'translate-x-[250px] -translate-y-[5px]'
    }

    let arrvisible=arrow[value]
    if(newArrow.current!==arrvisible){
        prevArrow.current=newArrow.current
        newArrow.current=arrvisible
    }
    let arrvisible2=arrow[value] || `${prevArrow.current}`



    return(
        <>
            <div className={`absolute transform-gpu translate-y-[80px] ${visible2} bg-slate-100 ${prevSize.current==undefined ? 'duration-75':'duration-300'} transistion-all rounded-lg ease-in-out`}>
                <div className={`absolute transform-gpu w-[15px] h-[15px] ${arrvisible2} bg-slate-100 rotate-45 transistion-all ease-in-out ${prevArrow.current==undefined ? 'duration-75':'duration-300'}`}></div>
            </div>
        </>
    )

}

export default Tooltip2