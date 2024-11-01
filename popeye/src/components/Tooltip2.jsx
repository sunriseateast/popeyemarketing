import React, {useRef} from 'react';

function Tooltip2({value}){
    let newSize=useRef()
    let prevSize=useRef()

    let newArrow=useRef()
    let prevArrow=useRef()

    let newBox=useRef()
    let prevBox=useRef()


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
        Softwares:'translate-x-[150px] w-[15px] h-[15px]',
        Reseller:'translate-x-[185px] w-[15px] h-[15px]',
        Support:'translate-x-[230px] w-[15px] h-[15px]',
        Book_a_Demo:'translate-x-[250px] w-[15px] h-[15px]'
    }

    let arrvisible=arrow[value]
    if(newArrow.current!==arrvisible){
        prevArrow.current=newArrow.current
        newArrow.current=arrvisible
    }
    let arrvisible2=arrow[value] || `${prevArrow.current}`


    //bgbox
    let box={
        Softwares:`h-[38px] w-[91px] -translate-x-[167px] opacity-50 rounded`,
        Reseller:`h-[38px] w-[78px] -translate-x-[61px] opacity-50 rounded`,
        Support:`h-[38px] w-[76px] translate-x-[37px] opacity-50 rounded`,
        Book_a_Demo:`h-[38px] w-[119px] translate-x-[153px] opacity-50 rounded`
    }

    // let boxvisible=box[value]
    // if(newBox.current!==boxvisible){
    //     prevBox.current=newBox.current
    //     newBox.current=boxvisible
    // }
    // let boxvisible2=box[value] || `${prevBox.current} opacity-0`

    return(
        <>
            <div className={`absolute transform-gpu  translate-y-[80px] ${visible2} bg-slate-100 ${prevSize.current==undefined ? 'duration-75':'duration-300'} transition-all rounded-lg ease-in-out`}>
                <div className={`absolute transform-gpu -translate-y-[5px] ${arrvisible2} bg-slate-100 rotate-45 transition-all ease-in-out ${prevArrow.current==undefined ? 'duration-75':'duration-300'}`}></div>
            </div>
            {/* <div className={`absolute transform-gpu bg-zinc-100 translate-y-[21px] ${boxvisible2} transition-all ease-in-out duration-500`}></div> */}
        </>
    )

}

export default Tooltip2