
import Arrow from "../../svg/Arrow"
import Check from "../../svg/Check"
import Windows from "../../svg/Winodws";
import Apple from "../../svg/Apple";
import "../Question.css"
import logo from "/images/logo.png"
import { useCallback, useState } from "react";

function Squestion(){
    let [clickp,setClickp]=useState(true)
    let [clicko,setClicko]=useState(false)

    const diff=useCallback((value)=>{
        if(value==='popeye'){
            setClicko(false)
            setClickp(true)
        }
        else if( value==='other'){
            console.log(value)
            setClicko(true)
            setClickp(false)
        }
    },[])

    return(
        <div className="my-[100px]">
            <p className="text-[20px] font-bold my-[10px]">Why to select our softwares</p>
            <div className="grid grid-cols-2 mx-[25px] mt-[50px]">
                <div onTouchStart={()=>diff('popeye')} className={`${clickp ? 'bg-[#1A1A1D]' : 'bg-zinc-800'} flex items-center justify-center rounded-l border-r border-zinc-900`}>
                    <div className="">
                        <img className="select-none cursor-pointer max-h-[40px] max-w-[70px] my-[10px]" src={logo} loading="lazy"/>
                    </div>
                </div>  
                <div  onTouchStart={()=>diff('other')} className={`${clicko ? 'bg-[#1A1A1D]' : 'bg-zinc-800' } flex items-center justify-center rounded-r`}>
                    <div className="">
                        <p className="select-none">Other Platform</p>
                    </div>
                </div>
            </div>
            {
                (()=>{
                    if(clickp){
                        return(
                            <div className="flex items-center justify-center overflow-hidden my-[50px]">
                                <div className="h-[430px] w-[300px] border border-zinc-700 rounded-[20px]">
                                        <div className="flex flex-col m-[20px] space-y-[20px]">
                                            <div className="flex">
                                                <img className="max-h-[40px] max-w-[70px] my-[10px]" src={logo} loading="lazy"/>
                                            </div>
                                            <div className="flex items-center space-x-[10px]">
                                                <div className="h-[20px] w-[20px] check">
                                                    <Check/>
                                                </div>
                                                <p className="my-[10px] font-bold">
                                                    Provide auto update
                                                </p>
                                            </div>
                                            <div className="flex items-center space-x-[10px]">
                                                <div className="h-[20px] w-[20px] check">
                                                    <Check/>
                                                </div>
                                                <p className="my-[10px] font-bold">
                                                    Ensure data security
                                                </p>
                                            </div>
                                            <div className="flex items-center space-x-[10px]">
                                                <div className="h-[20px] w-[20px] check">
                                                    <Check/>
                                                </div>
                                                <p className="my-[10px] font-bold">
                                                    Easy payment and activation
                                                </p>
                                            </div>
                                            <div className="flex items-center space-x-[10px]">
                                                <div className="h-[20px] w-[20px] check">
                                                    <Check/>
                                                </div>
                                                <p className="my-[10px] font-bold">
                                                    Provide service and support
                                                </p>
                                            </div>
                                            <div className="flex self-end space-x-[5px] my-[5px]">
                                                <div className="max-h-[15px] max-w-[15px]">
                                                    <Windows/>
                                                </div>
                                                <div className="max-h-[15px] max-w-[15px]">
                                                    <Apple/>
                                                </div>
                                                <div className="max-h-[15px] max-w-[15px] flex items-centre justify-center bg-slate-100 rounded-xl">
                                                    <div className="max-h-[10px] max-w-[10px] text-black font-bold m-[5px]">
                                                        <Arrow/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        )
                    }
                    else if(clicko){
                        return(
                            <div className="flex items-center justify-center overflow-hidden my-[50px]">
                                <div className="h-[390px] w-[300px] border rounded-[20px]">
                                    <div className="flex flex-col m-[20px] space-y-[20px]">
                                        <div className="">
                                            <p className="font-bold my-[10px] text-[20px] break-all">Other Platforms</p>
                                        </div>
                                        <div className="flex items-center space-x-[10px]">
                                            <p className="my-[10px] break-all">❌ No frequent update</p>
                                        </div>
                                        <div className="flex items-center space-x-[10px]">
                                            <p className="my-[10px] break-all">❌ Just provide Softwares</p>
                                        </div>
                                        <div className="flex items-center space-x-[5px]">
                                            <div className="max-h-[18px] max-w-[18px] text-lime-500">
                                                <Check/>
                                            </div>
                                            <p className="my-[10px] break-all">
                                                Connect with vendor
                                            </p>
                                        </div>
                                        <div className="flex items-center space-x-[10px]">
                                            <p className="my-[10px] break-all">❌ No support</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })()
            }
        </div>
    )
}


export default Squestion