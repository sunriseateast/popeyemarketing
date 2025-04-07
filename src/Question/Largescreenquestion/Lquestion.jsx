import Arrow from "../../svg/Arrow"
import Check from "../../svg/Check"
import Windows from "../../svg/Winodws";
import Apple from "../../svg/Apple";
import "../Question.css"
import logo from "/images/logo.png"
import { useRef } from "react";
import gsap from "gsap";

function Lquestion(){
    const div1Ref=useRef(null)

     function animation(){
        if(div1Ref.current){
            gsap.to(div1Ref.current,{
                height:'100px',
                ease: "power1.out",
            })
        }
     }

    return(
        <div className="my-[100px]">
            <p className="text-[40px] font-bold my-[10px]">Why to select our Softwares ?</p>
            <div className="flex overflow-hidden gap-x-[100px] my-[50px]">
                <div className="justify-self-center overflow-hidden">
                   <div className="h-[390px] w-[300px] border my-[20px] rounded-[20px]">
                        <div className="flex flex-col m-[20px] space-y-[20px]">
                            <div className="">
                                <p className="font-bold my-[10px] text-[20px] break-all">Observations</p>
                            </div>
                            <div className="flex items-center space-x-[10px]">
                                <p className="my-[10px] break-all">Auto-update</p>
                                <div className="max-h-[15px] max-w-[15px] text-slate-100">
                                    <Arrow/>
                                </div>
                            </div>
                            <div className="flex items-center space-x-[10px]">
                                <p className="my-[10px] break-all">Data</p>
                                <div className="max-h-[15px] max-w-[15px] text-slate-100">
                                    <Arrow/>
                                </div>
                            </div>
                            <div className="flex items-center space-x-[10px]">
                                <p className="my-[10px] break-all">Payment</p>
                                <div className="max-h-[15px] max-w-[15px] text-slate-100">
                                    <Arrow/>
                                </div>
                            </div>
                            <div className="flex items-center space-x-[10px]">
                                <p className="my-[10px] break-all">Support</p>
                                <div className="max-h-[15px] max-w-[15px] text-slate-100">
                                    <Arrow/>
                                </div>
                            </div>
                        </div>
                   </div>
                </div>

                <div className="justify-self-center overflow-hidden">
                    <div className="h-[430px] w-[300px] border border-zinc-700 rounded-[20px] popeye-card">
                        <div className="flex flex-col m-[20px] space-y-[20px]">
                            <div className="flex">
                                <img className="cursor-pointer h-[40px] w-[70px] my-[10px]" src={logo} loading="lazy"/>
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
                
                <div className="justify-self-center overflow-hidden">
                   <div className="h-[390px] w-[300px] border rounded-[20px] my-[20px] ">
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
            </div>
            
            <div className="flex flex-col my-[100px] gap-y-[30px]">

                <div onClick={animation} ref={div1Ref} className="bg-slate-100 rounded-xl p-[20px]">
                    <div>
                        <p className="text-black text-[20px]">Is it kind of fraud ?</p>
                    </div>
                </div>

                <div className="bg-slate-100 rounded-xl p-[20px]">
                    <div>
                        <p className="text-black text-[20px]">Is it kind of fraud ?</p>
                    </div>
                </div>

                <div className="bg-slate-100 rounded-xl p-[20px]">
                    <div>
                        <p className="text-black text-[20px]">Is it kind of fraud ?</p>
                    </div>
                </div>

                <div className="bg-slate-100 rounded-xl p-[20px]">
                    <div>
                        <p className="text-black text-[20px]">Is it kind of fraud ?</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Lquestion