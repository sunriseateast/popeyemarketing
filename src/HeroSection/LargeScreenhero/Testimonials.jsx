import React, { useEffect, useRef } from "react"
import Testcard from "./Testcard.jsx"
import "../HeroSection.css"
import p1 from "./images/p1.jpeg"

function Testimonials(){
    let elements=[]
    const elementRef=useRef(null)

    const testcontent=[
        {
            name:"Roshan Kadam",
            message:"One of the best software I used is Whatsapp Marketing",
            nostars:3,
            img:p1
        },
        {
            name:"Arif Khan",
            message:"I used SMS software easy to use",
            nostars:4,
            img:p1
        },
        {
            name:"Sandip Kute",
            message:"People are trust worty software is also relible",
            nostars:3,
            img:p1
        },
        {
            name:"Manish Shah",
            message:"Whatsapp softwares is so.. reilable",
            nostars:5,
            img:p1
        },
        {
            name:"Ritu Agarwal",
            message:"Support are great from the team looking forwrd to buy another..",
            nostars:4,
            img:p1
        },
        {
            name:"Nimesh Kokate",
            message:"I used softwares from this store from last 1.5 year",
            nostars:4,
            img:p1
        },
        {
            name:"Mahesh Sharma",
            message:"Good Experience meaningfull tools",
            nostars:3,
            img:p1
        },
        {
            name:"Bidesh Dinal",
            message:"Need more improvement in updates",
            nostars:2,
            img:p1
        },
        {
            name:"Anump Sharma",
            message:"Geniune people after payment I recieved activation keys in few minutes",
            nostars:4,
            img:p1
        },
        {
            name:"Bijesh Kumar",
            message:"Reliable tools/Softwares great devlopement",
            nostars:3,
            img:p1
        }
    ]
    
    const shuffleArray = (array) => {
        return [...array].sort(() => Math.random() - 0.5);
    }      

    for(let i = 0 ; i < 10 ; i++){
        elements.push(
            <Testcard
                key={i} 
                name={testcontent[i].name} 
                message={testcontent[i].message} 
                stars={testcontent[i].nostars}
                imgpath={testcontent[i].img}
            />
        )
    }

    const col1=shuffleArray(elements)
    const col2=shuffleArray(elements)
    const col3=shuffleArray(elements)

    useEffect(()=>{
        const element=elementRef.current
        const handlescroll=(event)=>{
            event.preventDefault()
        }
        
        if(element){
            element.addEventListener("wheel",handlescroll,{passive : false})
        }

        return()=>{
            if(element){
                element.removeEventListener("wheel",handlescroll)
            }
        }
    },[])

    return(
        <div className="h-full w-full top overflow-hidden">
            <div ref={elementRef} className="h-[calc(100vh-80px)] w-full grid grid-cols-3">

                <div className="overflow-auto scrollbar-none">
                    <div className="flex flex-col items-center justify-center will-change-transform">
                        <div className="scroll flex flex-col gap-y-[10px] will-change-transform mt-[10px]">
                            {
                                col1.map((value,index)=>(
                                    <div key={index} className="will-change-transform">{value}</div>
                                ))
                            }
                        </div>
                        <div className="scroll flex flex-col gap-y-[10px] will-change-transform mt-[10px]">
                            {
                                col1.map((value,index)=>(
                                    <div key={index} className="will-change-transform">{value}</div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="overflow-auto scrollbar-none">
                    <div className="flex flex-col items-center justify-center will-change-transform">
                        <div className="scroll2 flex flex-col gap-y-[10px] will-change-transform mt-[10px]">
                            {
                                col2.map((value,index)=>(
                                    <div key={index} className="will-change-transform">{value}</div>
                                ))
                            }
                        </div>
                        <div className="scroll2 flex flex-col gap-y-[10px] will-change-transform mt-[10px]">
                            {
                                col2.map((value,index)=>(
                                    <div key={index} className="will-change-transform">{value}</div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="overflow-auto scrollbar-none">
                    <div className="flex flex-col items-center justify-center will-change-transform">
                        <div className="scroll3 flex flex-col gap-y-[10px] will-change-transform mt-[10px]">
                            {
                                col3.map((value,index)=>(
                                    <div key={index} className="will-change-transform">{value}</div>
                                ))
                            }
                        </div>
                        <div className="scroll3 flex flex-col gap-y-[10px] will-change-transform mt-[10px]">
                            {
                                col3.map((value,index)=>(
                                    <div key={index} className="will-change-transform">{value}</div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials