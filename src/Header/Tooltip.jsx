import './Header.css';


function Tooltip({value}){

    //Bgbox
    let boxcss=`-z-1 hover:cursor-pointer bg-zinc-400 translate-y-[21px] opacity-20 rounded transition-all ease-in-out duration-500`
    let box={
        Softwares:<div className={`box absolute transform-gpu h-[38px] w-[91px] ${boxcss} -translate-x-[167px]`}></div>,
        Reseller:<div className={`absolute transform-gpu h-[38px] w-[78px] ${boxcss} -translate-x-[61px]`}></div>,
        Support:<div className={`absolute transform-gpu h-[38px] w-[76px] ${boxcss} translate-x-[37px]`}></div>,
        //Book_a_Demo:<div className='absolute hover:cursor-pointer h-[38px] w-[119px] translate-x-[153px] translate-y-[21px] transition-all ease-in-out duration-500'></div>
    }

    let boxvisible=box[value]
    
    return(
        <>
            {boxvisible}
        </>
    )

}

export default Tooltip