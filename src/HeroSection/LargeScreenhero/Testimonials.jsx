import React from "react"
import Testcard from "./Testcard.jsx"
import "../HeroSection.css"
import p1 from "./images/p1.jpeg"

function Testimonials(){
    let elements=[]
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

    return(
        <div className="h-full w-full bg-pink-500">
            <div className="h-[534px] w-[682px] grid grid-cols-3">
                <div className="bg-amber-500">
               
                </div>
                <div className="bg-lime-500">
                   
                </div>
                <div className="bg-blue-500 overflow-auto scrollbar-none">
                    <div className="flex items-center justify-center">
                        <div className="flex flex-col space-y-[20px] scroll">
                            {shuffleArray(elements)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials