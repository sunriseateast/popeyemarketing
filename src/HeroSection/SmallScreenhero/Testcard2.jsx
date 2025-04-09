import React from "react";
import Rating from "../../svg/Rating.jsx";
import "../HeroSection.css"

function Testcard2({imgpath,stars,message,name}){
    return(
        <div className="h-full max-w-[300px] flex items-center justify-center rounded-lg testcard">
            <div className="flex flex-row gap-x-[20px] p-[10px]">
                <div className="grid grid rows-2 gap-y-[5px] items-center justify-center">
                    <div>
                        <div className="flex items-center justify-center rounded-lg border border-[#3C3D37] h-[50px] w-[50px]">
                            <img src={imgpath} alt='people pic' className="max-h-[35px] max-w-[35px] rounded"/>
                        </div>
                    </div>
                    <div className="text-[#3C3D37]">
                        <Rating nostars={stars}/>
                    </div>
                </div>
                <div className="grid grid rows-2 gap-y-[5px]">
                    <div>
                        <p className="text-[15px]">{message}</p>
                    </div>
                    <div>
                        <p className="text-[10px] break-all">- {name}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Testcard2;