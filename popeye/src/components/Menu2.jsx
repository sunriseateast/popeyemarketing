import { useEffect,useState,useRef,useCallback} from "react"
import whatsapp from "/images/whatsapp.png";
import data from "/images/database.png";

function Menu2({value,css,icon}){
    let [hmopen,setHmopen]=useState(icon)   // Get hm icon
    let [clk_value,setClk_Value]=useState(null)    //To set values for sm screen
    let [isRendered, setIsRendered] = useState(false);
    let [firstChild,setfirstChild]=useState(null)
    let [secondChild,setsecondChild]=useState(null)
    let [thirdChild,sethirdChild]=useState(null)
    const containerRef = useRef(null);

    useEffect(()=>{
        setHmopen(icon)

        const navItems=Object.freeze(['Softwares','Reseller','Support','Book a Demo'])
        let container=containerRef.current

        navItems.find(item=>
            {
                if (item.replace(/\s+/g, '_') === clk_value) { // Replace spaces with underscores for comparison
                    setsecondChild(item)      
                    setfirstChild(navItems[(navItems.indexOf(secondChild) - 1 + navItems.length) % navItems.length])
                    sethirdChild(navItems[(navItems.indexOf(secondChild) + 1) % navItems.length]) 
                }
            }
        )

        if(container){
            const Child=container.children[1]
            if(Child){
                Child.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
            }
        }

        let observer=new IntersectionObserver((item)=>{
        let itemText=item[0].target.innerText
        if(itemText===thirdChild){
            setfirstChild(secondChild)
            setsecondChild(thirdChild)
            sethirdChild("Support")
        }
        },{ threshold: 0.5 })


        if(container){
            Array.from(container.children).forEach(element => {
                observer.observe(element)
            });
        }
    },[icon,clk_value,firstChild,secondChild,thirdChild])


    // const handleScroll = useCallback(() => {
    //     requestAnimationFrame(()=>{
    //         const fragment = document.createDocumentFragment();
    //         const container = containerRef.current;

    //         if (container) {
    //             // Check if the user has scrolled to the end
    //             const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 10;
    //             if(isAtEnd){
    //                 for (let i = 0; i < container.childNodes.length; i++) {
    //                     const child = container.childNodes[i];
    //                     fragment.append(child.cloneNode(true)); // Use cloneNode to create a deep copy
    //                 }
    //                 // Append the fragment to the container in a single operation
    //                 container.append(fragment);
    //             }
    //         }
            
    //     })
    // },[])
    

    //Bucket Logic
    // const navItems=Object.freeze(['Softwares','Reseller','Support','Book a Demo'])
    // let firstChild
    // let thirdChild
    // let container=containerRef.current

    // navItems.find(item=>
    //     {
    //         if (item.replace(/\s+/g, '_') === clk_value) { // Replace spaces with underscores for comparison
    //             secondChild = item;
    //             firstChild=navItems[(navItems.indexOf(secondChild) - 1 + navItems.length) % navItems.length]
    //             thirdChild=navItems[(navItems.indexOf(secondChild) + 1) % navItems.length]
    //           }
    //     }
    // )

    // if(container){
    //     const Child=container.children[1]
    //     if(Child){
    //         Child.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    //     }
    // }

    // let observer=new IntersectionObserver((item)=>{
    //     let itemText=item[0].target.innerText
    //     if(itemText===thirdChild){
    //         firstChild=secondChild
    //         secondChild=thirdChild
    //         thirdChild="Support"
    //     }
    // },{ threshold: 0.5 })


    // if(container){
    //     Array.from(container.children).forEach(element => {
    //         observer.observe(element)
    //     });
    // }


    
    //Function to pass value for lg screen
    function moenter(title){
        if(value){
            value(title)
        }
    }

    //Function to pass value for sm screen
    function click(value){
        setClk_Value(value)
        setTimeout(()=>{setIsRendered(true)},700)
    }
    
    //Object to show for sm screen
    const divcss=`flex flex-col m-[20px] rounded-lg transition-all duration-700 transform-gpu ease-in-out ${isRendered ? '' :'translate-y-[400px]'}`
    const divs={

        Softwares:
        <div className={divcss}>
            <div className="border-slate-200 bg-slate-200 m-[10px] rounded-lg p-[13px]">
               <div className="flex space-x-[10px] transition-all transform-gpu ease-in-out">
                    <div className="bg-white rounded-[22px] shrink-0 flex items-center justify-center h-[50px] w-[50px]">
                        <img src={whatsapp} className="h-[30px] w-[30px]" alt="WhatsApp" />
                    </div>
                    <p className='text-[17px] text-black font-medium mt-[12px] shrink-0'>Whatsapp Marketing</p>
               </div>
               <p className='mt-[9px] text-base text-neutral-500'>Send Bulk Messages Anytime</p>
            </div>
            
            <div className={`border-slate-200 bg-slate-200 m-[10px] rounded-lg p-[13px] transition-all duration-700 transform-gpu ease-in-out ${isRendered ? '' :'translate-y-[400px]'}`}>
               <div className="flex space-x-[10px] transition-all transform-gpu ease-in-out">
                    <div className="bg-white rounded-[22px] shrink-0 flex items-center justify-center h-[50px] w-[50px]">
                        <img src={data} className="h-[30px] w-[30px]" alt="data" />
                    </div>
                    <p className='text-[17px] text-black font-medium mt-[12px] shrink-0'>Data Software</p>
               </div>
               <p className='mt-[9px] text-base text-neutral-500'>Scrap Genuine Data Easily</p>
            </div>
            <div className={`mt-[20px] flex items-center justify-center transition-all duration-700 transform-gpu ease-in-out ${isRendered ? '' :'translate-y-[400px]'}`}>
                <button className='text-base text-black active:text-slate-100 active:bg-neutral-800 border border-neutral-900 rounded-lg p-[8px]'>All Softwares</button>
            </div>
            <div className={`flex items-center justify-center mt-[30px] transform-gpu transition-all ease-in-out duration-700 ${isRendered ? '' :'translate-y-[400px]'}`}>
                <nav>
                    <a href='#' className='underline underline-offset-1 text-blue-500 text-sm'>Terms & Conditions</a>
                </nav>
            </div>
        </div>,
         
         Reseller:
         <div className={divcss}>
             Reseller clicked
         </div>,

         Support:
         <div className={divcss}>
             Support clicked
         </div>,

         Book_a_Demo:
         <div className={divcss}>
             Book a Demo clicked
         </div>,
        
    }
    const content=divs[clk_value]

    // CSS for lg & sm screen
    const lgscreen=`md:opacity-100 md:z-10 md:p-[10px] md:m-[10px] md:text-base md:border-none`
    const smscreen=`opacity-0 ${hmopen && `transition-all opacity-100 duration-300 transform-gpu ease-in-out`}`
    if(icon){
        return(
            <div className="h-full w-full relative">
                <div className="grid place-items-center justify-content-center">
                        {
                            clk_value ?
                            <>
                                <nav ref={containerRef} className="flex flex-row w-[130px] overflow-x-auto gap-x-[30px] nav bg-zinc-900 whitespace-nowrap -translate-y-[45px] py-[10px]">
                                    <a href="#">{firstChild}</a>
                                    <a href="#">{secondChild}</a>
                                    <a href="#">{thirdChild}</a>
                                </nav>

                            </> :
                            <>
                                <nav className={`${css}`}>
                                    <a href="#" className={`${lgscreen} ${smscreen}`} onClick={()=>{click('Softwares')}}
                                    onMouseEnter={()=>{moenter('Softwares')}}>Softwares</a>
                                    
                                    <a href="#" className={`${smscreen} delay-75  ${lgscreen}`} onClick={()=>{click('Reseller')}}
                                    onMouseEnter={()=>{moenter('Reseller')}}>Reseller</a>

                                    <a href="#" className={`${smscreen} delay-100 ${lgscreen}`} onClick={()=>{click('Support')}}
                                    onMouseEnter={()=>{moenter('Support')}}>Support</a>
                        
                                    <a href="#" className={`${smscreen} delay-150 ${lgscreen}`} onClick={()=>{click('Book_a_Demo')}}
                                    onMouseEnter={()=>{moenter('Book_a_Demo')}}>Book a Demo</a>
                                </nav>
                            </>
                        }                
                    <div className={`md:hidden absolute overflow-hidden top-2 w-80 delay-150 ${clk_value ? 'translate-y-[15px]':'translate-y-[600px]'} bg-slate-100 text-black duration-700 rounded-lg transition-all transform-gpu ease-in-out`}>
                        {content} 
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu2