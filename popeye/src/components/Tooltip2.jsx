import React, {useRef} from 'react';
import whatsapp from "/images/whatsapp.png";
import data from "/images/database.png";

function Tooltip2({value}){

    let newSize=useRef()
    let prevSize=useRef()

    let newArrow=useRef()
    let prevArrow=useRef()

    //Div
    let size={
        Softwares:'h-[230px] w-[600px] -translate-x-[140px] ', 
        Reseller: 'h-[200px] w-[400px] -translate-x-[50px] ', 
        Support:'h-[200px] w-[300px] -translate-x-[50px]',
        Book_a_Demo:'h-[150px] w-[300px] translate-x-[70px]',
    }

    let visible=size[value]
    if(newSize.current !== visible){       
        prevSize.current=newSize.current
        newSize.current=visible
    }
    let visible2=size[value] || `${prevSize.current} scale-95 opacity-0`



    //Arrow
    let arrow={
        Softwares:'translate-x-[230px] w-[15px] h-[15px]',
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


    //Bgbox
    let boxcss=`bg-zinc-400 translate-y-[21px] opacity-20 rounded transition-all ease-in-out duration-500`
    let box={
        Softwares:<div className={`absolute transform-gpu h-[38px] w-[91px] ${boxcss} -translate-x-[167px]`}></div>,
        Reseller:<div className={`absolute transform-gpu h-[38px] w-[78px] ${boxcss} -translate-x-[61px]`}></div>,
        Support:<div className={`absolute transform-gpu h-[38px] w-[76px] ${boxcss} translate-x-[37px]`}></div>,
        Book_a_Demo:<div className={`absolute transform-gpu h-[38px] w-[119px] ${boxcss} translate-x-[153px]`}></div>
    }

    let boxvisible=box[value]
    

    //Content
    let divs={
        Softwares:
        <div className='flex justify-center  rounded-lg h-full'>
                <div className='w-full rounded-lg m-[10px]'>
                   <div className='hover:bg-slate-200 rounded-lg m-[10px] mt-[25px] p-[13px]'>
                        <div className='flex space-x-[10px]'>
                            <div className="bg-white rounded-[22px] flex items-center justify-center h-[60px] w-[60px]">
                                <img src={whatsapp} className="h-[35px] w-[35px]" alt="WhatsApp" />
                            </div>
                            <p className='whitespace-nowrap text-black font-medium mt-[17px]'>Whatsapp Marketing</p>
                        </div>
                        <p className='whitespace-nowrap mt-[9px] text-neutral-500'>Send Bulk Messages Anytime</p>
                   </div>
                </div>
                

                <div className='overflow-hidden w-full rounded-lg m-[10px]'>
                   <div className='hover:bg-slate-200 rounded-lg m-[10px] mt-[25px] p-[13px]'>
                        <div className='flex space-x-[10px]'>
                            <div className="bg-white rounded-[22px] flex items-center justify-center h-[60px] w-[60px]">
                                <img src={whatsapp} className="h-[35px] w-[35px]" alt="WhatsApp" />
                            </div>
                            <p className='whitespace-nowrap text-black font-medium mt-[17px]'>Whatsapp Marketing</p>
                        </div>
                        <p className='whitespace-nowrap mt-[9px] text-neutral-500'>Send Bulk Messages Anytime</p>
                   </div>
                   <div className='flex justify-end m-[10px]'>
                        <button className='bg-lime-500 whitespace-nowrap rounded-lg h-[40px] w-[110px]'>All Softwares</button>
                   </div>
                </div>
            </div>
        // <div className="rounded-lg flex space-x-[20px] space-x-[120px]">

        //    <div className='bg-slate-300 rounded-lg'>
        //         <div className='flex h-[120px] w-[120px]'>
        //             <div>
        //                 <div className="bg-white rounded-[22px] flex items-center justify-center h-[60px] w-[60px]">
        //                     <img src={whatsapp} className="h-[35px] w-[35px]" alt="WhatsApp" />
        //                 </div>
        //             </div>
        //             <div>
        //                 <p className='text-slate-500 whitespace-nowrap mt-[15px] ml-[10px]'>Whatsapp Marketing</p>
        //             </div>
        //         </div>
        //         <div>
        //             <p className='text-slate-500 whitespace-nowrap ml-[20px]'>Send Bulk Messages Anytime</p>
        //         </div>
        //    </div>

        //     <div className='overflow-hidden rounded-lg bg-slate-300'>
        //         <div className='flex'>
        //             <div>
        //                 <div className="bg-white rounded-[22px] flex items-center justify-center h-[60px] w-[60px]">
        //                     <img src={whatsapp} className="h-[35px] w-[35px]" alt="WhatsApp" />
        //                 </div>
        //             </div>
        //             <div>
        //                 <p className='text-slate-500 whitespace-nowrap mt-[15px] ml-[10px]'>Data Software</p>
        //             </div>
        //         </div>
        //         <div>
        //             <p className='text-slate-500 whitespace-nowrap ml-[20px]'>Scrap Data Easily</p>
        //         </div>
        //     </div>
        // </div>

        
        // Softwares:
        //     <div className='flex m-[25px] space-x-24'>

        //             <div className='whitespace-nowrap'>
        //                 <div className="grid grid-cols-3 gap-3 items-center">
        //                     <div className="flex justify-end">
        //                         <div className="bg-white rounded-[22px] flex items-center justify-center h-[60px] w-[60px]">
        //                             <img src={whatsapp} className="h-[35px] w-[35px]" alt="WhatsApp" />
        //                         </div>
        //                     </div>
        //                     <div className="col-span-2 flex items-center justify-start">
        //                         <p className="text-black font-medium">Whatsapp Marketing</p>
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className='whitespace-nowrap'>
        //                 <div className='grid grid-cols-3 gap-3 items-center'>
        //                     <div className='flex justify-end'>
        //                         <div className='bg-white rounded-[22px] flex items-center justify-center h-[60px] w-[60px]'>
        //                             <img src={data} className='h-[35px] w-[35px]' alt='Data'/>
        //                         </div>
        //                     </div>
        //                     <div className='col-span-2 flex item-center justify-start bg-amber-500'>
        //                         <p className='text-neutral-500 font-medium grow-0'>Data Software</p>
        //                     </div>
        //                 </div>
        //             </div>
        //     </div>
        
    //     Supporta:
    //     <div className={``}>
    //     <div className='grid grid-cols-2 m-[25px]'>
    //         <div className='grid grid-cols-3 gap-5 bg-amber-400'>
    //             <div className='grid justify-items-end'>
    //                 <div className='bg-white rounded-[22px] grid content-center justify-items-center h-[60px] w-[60px]'>
    //                     {/* <img src={whatsapp} className='h-[35px] w-[35px]'/> */}
    //                 </div>
    //             </div>
    //             <div className='col-span-2 grid content-center justify-items-start'>
    //                 <p className='text-black font-medium'>Whatsapp Marketing</p>
    //             </div>
    //         </div>
    //         <div className='grid grid-cols-3 gap-5 bg-lime-300'>
    //             <div className='grid justify-items-end'>
    //                 <div className='bg-white rounded-[22px] grid content-center justify-items-center h-[60px] w-[60px]'>
    //                     {/* <img src={data} className='h-[35px] w-[35px]'/> */}
    //                 </div>
    //             </div>
    //             <div className='col-span-2 grid content-center justify-items-start'>
    //                 <p className='text-black font-medium'>Data Software</p>
    //             </div>
    //         </div>
    //     </div>
    // </div>

    
        // Softwares:
        //     <div className='flex flex-row justify-between'>
        //         <div className='flex flex-row'>
        //             <div className='bg-white rounded-[22px] grid content-center justify-items-center h-[60px] w-[60px]'>
        //             </div>
        //             <p className='text-black font-medium flex-auto'>Whatsapp Marketing</p>
        //         </div>
        //         <div className='flex flex-row'>
        //             <div className='bg-white rounded-[22px] grid content-center justify-items-center h-[60px] w-[60px]'>
        //             </div>
        //             <p className='text-black font-medium'>Data Software</p>
        //         </div>
        //     </div>
            
        
    }
    let content=divs[value]

    return(
        <>
            <div className={`absolute transform-gpu z-10 translate-y-[80px] ${visible2} bg-slate-100 ${newSize.current!==undefined && 'duration-300'} transition-all rounded-lg ease-in-out`}>
                <div className={`absolute transform-gpu -translate-y-[5px] ${arrvisible2} bg-slate-100 rotate-45 transition-all ease-in-out`}></div>
                {content}
            </div>
            {boxvisible}
        </>
    )

}

export default Tooltip2