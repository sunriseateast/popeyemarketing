import React from "react";

function Tooltip3({value}){
    let content={
        Softwares:
        <div className={`absolute h-[230px] w-[600px] transform-gpu z-10 translate-y-[80px] -translate-x-[140px] bg-slate-100 duration-300 transition-all rounded-lg ease-in-out`}>
            <div className={``}>
            <div className='grid grid-cols-2 m-[25px]'>
                <div className='grid grid-cols-3 gap-5 bg-amber-400'>
                    <div className='grid justify-items-end'>
                        <div className='bg-white rounded-[22px] grid content-center justify-items-center h-[60px] w-[60px]'>
                            {/* <img src={whatsapp} className='h-[35px] w-[35px]'/> */}
                        </div>
                    </div>
                    <div className='col-span-2 grid content-center justify-items-start'>
                        <p className='text-black font-medium'>Whatsapp Marketing</p>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-5 bg-lime-300'>
                    <div className='grid justify-items-end'>
                        <div className='bg-white rounded-[22px] grid content-center justify-items-center h-[60px] w-[60px]'>
                            {/* <img src={data} className='h-[35px] w-[35px]'/> */}
                        </div>
                    </div>
                    <div className='col-span-2 grid content-center justify-items-start'>
                        <p className='text-black font-medium'>Data Software</p>
                    </div>
                </div>
            </div>
        </div>
        </div>,

        Support:
        <div className={`absolute h-[200px] w-[300px] transform-gpu z-10 translate-y-[80px] -translate-x-[50px] bg-slate-100 duration-300 transition-all rounded-lg ease-in-out`}>
            <div className={``}>
            <div className='grid grid-cols-1 m-[25px]'>
                <div className='grid grid-cols-3 gap-5 bg-amber-400'>
                    <div className='grid justify-items-end'>
                        <div className='bg-white rounded-[22px] grid content-center justify-items-center h-[60px] w-[60px]'>
                            {/* <img src={whatsapp} className='h-[35px] w-[35px]'/> */}
                        </div>
                    </div>
                    <div className='col-span-2 grid content-center justify-items-start'>
                        <p className='text-black font-medium'>Whatsapp Marketing</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    }

    let visible=content[value]


    return(
        <>
            {visible}
        </>
    )
}

export default Tooltip3