import React from "react";
import Rating from "../../svg/Rating.jsx";
import "../HeroSection.css"

function Testcard({imgpath,stars,message,name}){
return(
    <div className="max-w-[180px] flex items-center justify-center rounded-lg testcard">
        <div className="flex flex-col space-y-[5px] items-center justify-center m-[10px]">
            <div className="flex items-center justify-center rounded-lg border border-[#3C3D37] h-[65px] w-[65px]">
                <img src={''} alt='people pic' className="h-[50px] w-[50px] rounded"/>
            </div>
            <div className="h-[30px] w-[90px] text-[#3C3D37]">
                <Rating nostars={stars}/>
            </div>
            <div>
                <p className="text-center text-[15px] m-[2px] break-all">{message}</p>
            </div>
            <div className="flex justify-end mt-[5px]">
                <p className="text-[10px] break-all">- {name}</p>
            </div>
        </div>
    </div>
)

}

export default Testcard