import React, { useEffect, useRef } from "react"
import Testcard from "./Testcard.jsx"
import "../HeroSection.css"
import reviews from "../Reviews.js"

function Testimonials(){
    let elements=[]
    const elementRef=useRef(null)
    
    //Testimonials
    const testcontent=reviews
    
    //function to shuffle testimonials
    const shuffleArray = (array) => {
        return [...array].sort(() => Math.random() - 0.5);
    }      


    //create Testcard component 10 times 
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


    //to avoid users scrolling
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
        <div className="h-full w-full top">
            <div ref={elementRef} className="h-[550px] w-[650px] grid grid-cols-3">
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