import { useEffect,useState,useRef,useCallback} from "react"
import whatsapp from "/images/whatsapp.png";
import data from "/images/database.png";
import user from "/images/user.png";
import chat from "/images/chat.png";

function SmallscreenMenu({css,icon}){
    let [hmopen,setHmopen] = useState(icon)   // Get hm icon
    let [clk_value,setClk_Value] = useState(false)    //To set values for sm screen
    let [isRendered, setIsRendered] = useState(false);
    let [scrollFlag, setscrollFlag]= useState(false);
    let observerRef=useRef(null)
    const containerRef = useRef(null);

    let timer = function(fn,delay){
        setTimeout(fn,delay)
    }

    useEffect(() => {

        setHmopen(icon);

        observerRef.current=new IntersectionObserver((item)=>{
            item.find(element => {
                if(element.isIntersecting){
                    setClk_Value(element.target.innerText.replace(/\s+/g, '_'))
                }
            });
        },{threshold:0.8})    

        return(()=>{
            if(observerRef.current){
                observerRef.current.disconnect()
            }
            setClk_Value(false)
            setIsRendered(false)
            setscrollFlag(false)
            clearTimeout(timer)
        })

    }, [icon]);


    const container = containerRef.current;
    
    //Logic for scroll onto clk node
    if(container){
        if(scrollFlag==false){
            Array.from(container.children).find(element => {
                if(element.innerText.replace(/\s+/g, '_')==clk_value){       // Replace spaces with underscores for comparison
                    element.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
                    setscrollFlag(true)
                }
            })
        }
        else{
            Array.from(container.children).forEach((element)=>{
                timer(()=>{
                    observerRef.current.observe(element)
                },700)
            })
        }
    }


    const handleScroll = useCallback(() => {
        timer(()=>{
            const fragment = document.createDocumentFragment();
            const container = containerRef.current;

            if (container) {
                // Check if the user has scrolled to the end
                const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 10;
                if(isAtEnd){
                    for (let i = 0; i < container.childNodes.length; i++) {
                        const child = container.childNodes[i];
                        fragment.append(child.cloneNode(true)); // Use cloneNode to create a deep copy
                    }
                    // Append the fragment to the container in a single operation
                    container.append(fragment);

                    // Observe the newly appended children
                    Array.from(container.children).slice(-container.childNodes.length / 2).forEach((element) => {
                        observerRef.current.observe(element);
                    });
                }

                const start=container.scrollLeft
                if(start==0){
                    for(let i=container.childNodes.length-1 ; i >=0 ; i--){
                        const child = container.childNodes[i];
                        fragment.prepend(child.cloneNode(true));
                    }
                    container.prepend(fragment);

                    // Observe the newly prepended children
                    Array.from(container.children).slice(0, container.childNodes.length / 2).forEach((element) => {
                        observerRef.current.observe(element);
                    });
                }
            }
        },0)
    },[])


    //Function to pass value for sm screen
    function click(value){
        setClk_Value(value)
        timer(()=>{setIsRendered(true)},700)
    }
    

    //Object to show for sm screen
    const divcss=`flex flex-col m-[20px] rounded-lg transition-all duration-700 transform-gpu ease-in-out ${isRendered ? '' :'translate-y-[400px]'}`
    const divs={

        Softwares:
        <div className={divcss}>
            <div className="border-slate-200 bg-slate-200 m-[10px] rounded-lg p-[13px]">
               <div className="flex space-x-[10px]">
                    <div className="bg-white rounded-[22px] shrink-0 flex items-center justify-center h-[50px] w-[50px]">
                        <img src={whatsapp} className="h-[30px] w-[30px]" alt="WhatsApp" />
                    </div>
                    <p className='text-[17px] text-black font-medium mt-[12px] shrink-0'>Whatsapp Marketing</p>
               </div>
               <p className='mt-[9px] text-base text-neutral-500'>Send Bulk Messages Anytime</p>
            </div>
            
            <div className={`border-slate-200 bg-slate-200 m-[10px] rounded-lg p-[13px] transition-all duration-700 transform-gpu ease-in-out ${isRendered ? '' :'translate-y-[400px]'}`}>
               <div className="flex space-x-[10px]">
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
            <div className='flex justify-center h-full rounded-lg'>
                <div className='flex flex-col m-[20px] space-y-[20px]'>
                    <div className={`overflow-hidden flex flex-col space-y-[10px] ${isRendered ? '' :'translate-y-[400px]'}`}>
                        <div className="flex items-center justify-center ">
                            <div className="bg-white group-hover:shadow-md rounded-[22px] flex items-center justify-center h-[50px] w-[50px]">
                                <img src={user} className="h-[30px] w-[30px]" alt="data" />
                            </div>
                        </div>

                        <div className="text-center overflow-hidden w-[290px]">
                            <p className='text-base text-neutral-500'>
                                Gain access to top-notch software solutions and 
                                earn profits by helping businesses grow...
                                <span>
                                    <a href='#' className='animated-gradient'>Know More</a>
                                </span>
                            </p>
                        </div> 
                    </div>
              
              
                    <div className={`flex flex-col space-y-[10px] ${isRendered ? '' :'translate-y-[400px]'}`}>
                        <div className='flex items-center justify-center'>
                            <button className='text-base text-black active:text-slate-100 active:bg-neutral-800 border border-neutral-900 rounded-lg p-[8px]'>Master Login</button>
                        </div>
                        <div className='flex items-center justify-center'>
                            <button className='text-base text-black active:text-slate-100 active:bg-neutral-800 border border-neutral-900 rounded-lg p-[8px]'>Reseller Login</button>
                        </div>
                    </div>
                </div>
            </div>

         </div>,

         Support:
         <div className={divcss}>
            <div className='flex justify-center h-full rounded-lg '>
                <div className='flex items-center justify-center m-[25px] rounded-lg'>
                    <div className='flex m-[5px] overflow-hidden gap-x-[10px]'>
                        <div className='shrink-0'>
                            <div className="bg-white group-hover:shadow-md rounded-[22px] flex items-center justify-center h-[50px] w-[50px]">
                                <img src={chat} className="h-[30px] w-[30px]" alt="chat" />
                            </div>
                        </div>
                        <div className='w-[200px]'>
                            <p className='text-base text-neutral-500'>
                                Our <span className='text-black font-bold'>Dedicated Support</span> Team is here to ensure a smooth experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
         </div>,

         Book_a_Demo:
         <div className={divcss}>
             Book a Demo clicked
         </div>,
        
    }

    let content=divs[clk_value]

    // CSS for lg & sm screen
    const smscreen=`opacity-0 ${hmopen && `transition-all opacity-100 duration-300 transform-gpu ease-in-out`}`
    if(icon){
        return(
            <div className="h-full w-full relative">
                <div className="grid place-items-center justify-content-center">
                        {
                            clk_value ?
                            <>
                                <nav ref={containerRef} 
                                 onScroll={() => {
                                    let timeout
                                    if (timeout) clearTimeout(timeout)
                                    timeout=timer(handleScroll,100)
                                }}
                                className="flex flex-row w-[130px] overflow-x-auto gap-x-[30px] nav bg-zinc-900 whitespace-nowrap -translate-y-[45px] py-[10px]">
                                    <a href="#">Softwares</a>
                                    <a href="#">Reseller</a>
                                    <a href="#">Support</a>
                                    <a href="#">Book a Demo</a>
                                </nav>

                            </> :
                            <>
                                <nav className={`${css}`}>
                                    <a href="#" className={`${smscreen}`} onTouchStart={()=>{click('Softwares')}}
                                    onMouseEnter={()=>{moenter('Softwares')}}>Softwares</a>
                                    
                                    <a href="#" className={`delay-75  ${smscreen}`} onTouchStart={()=>{click('Reseller')}}
                                    onMouseEnter={()=>{moenter('Reseller')}}>Reseller</a>

                                    <a href="#" className={`delay-100 ${smscreen}`} onTouchStart={()=>{click('Support')}}
                                    onMouseEnter={()=>{moenter('Support')}}>Support</a>
                        
                                    <a href="#" className={`delay-150 ${smscreen}`} onTouchStart={()=>{click('Book_a_Demo')}}
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

export default SmallscreenMenu;