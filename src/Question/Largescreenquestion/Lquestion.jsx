import Arrow from "../../svg/Arrow"
import Check from "../../svg/Check"
import Windows from "../../svg/Winodws";
import Apple from "../../svg/Apple";
import "../Question.css"
import logo from "/images/logo.png"
gsap.registerPlugin(ScrollTrigger) 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Add from "../../svg/Add";
import Rightarr from "../../svg/Rightarr";
import { Link } from "react-router-dom";

function Lquestion(){

    const [open,setOpen]=useState([false,false,false,false])
    const divRef=useRef([])
    const plusRef=useRef([])

     // Function for animating card
     function animation(newState,container,plus){  
        if(newState){
            if(container){
                gsap.to(container,{
                    height:'152px',
                    ease: "power1.out",
                })
            }
    
            if(plus){
                gsap.to(plus,{
                    rotate:'-45deg',
                    ease: "power3.out",
                })
            }
        }
        else{
            if(container){
                gsap.to(container,{
                    height:'65px',
                    ease: "power1.out",
                })
            }
    
            if(plus){
                gsap.to(plus,{
                    rotate:'0deg',
                    ease: "power3.out",
                })
            }
        }
        
     }
    useEffect(()=>{
        gsap.to(".popeye-card",{
            scrollTrigger:{
                trigger:".popeye-card",
                start:"start +=400",
            },
            y:0,
            opacity:1
        })

        const othercards=gsap.utils.toArray('.others-cards')
        othercards.forEach(card =>{
            gsap.to(card,{
                scrollTrigger:{
                    trigger:card,
                    start:"start +=300"
                },
                y:0,
                opacity:1
            })
        })
    },[])

    return(
        <div className="my-[100px]">
            <p className="text-[40px] font-bold my-[10px]">Why to select our Softwares ?</p>
            <div className="grid grid-cols-3 overflow-hidden gap-x-[100px] my-[50px]">
                <div className="justify-self-center overflow-hidden">
                   <div className="others-cards translate-y-[40px] opacity-0 h-[390px] w-[300px] border my-[20px] rounded-[20px]">
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
                    <div className="popeye-card translate-y-[40px] opacity-0 h-[430px] w-[300px] border border-zinc-700 rounded-[20px] popeye-card">
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
                   <div className="others-cards translate-y-[40px] opacity-0 h-[390px] w-[300px] border rounded-[20px] my-[20px] ">
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
            
            <div className="grid grid-cols-2 mt-[200px]">
                <p className="text-[40px] font-bold leading-[1.2]">
                    Got Questions ?<br/>
                    We've Got Answers
                </p>
                <div className="grid justify-items-end">
                    <p className="text-[20px] font-semibold leading-[1.2] my-[10px]">
                        If you have more questions<br/>
                        feel free to contact us.
                    </p>
                    <div className="mx-[130px] my-[10px]">
                        <Link to='/support'>
                            <div className="border border-zinc-700 flex items-center justify-center max-w-[120px] rounded-[200px] bg-zinc-900 text-black p-[8px]">
                                <p className="text-center text-[15px] text-slate-100">Contact Us</p>
                                <div className="max-h-[20px] max-w-[20px] text-slate-100">
                                    <Rightarr/>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-y-[30px] my-[60px]">

                <div onClick={()=>{
                    setOpen(prev=>{
                        const updated=[...prev]
                        animation(!updated[0],divRef.current[0],plusRef.current[0])
                        updated[0]=!updated[0]
                        return updated
                    })
                    
                }} ref={el => divRef.current[0] = el} className={`${open[0] && 'faq-card'} cursor-pointer bg-slate-100 rounded-xl overflow-hidden p-[20px] h-[65px]`}>
                    <div>
                        <div className="grid grid-cols-2">
                            <p className="text-black text-[20px]">Is it kind of fraud ?</p>
                            <div className="flex justify-end items-center">
                                <div ref={el => plusRef.current[0] = el} className="h-[20px] w-[20px] will-change-transform transform-gpu">
                                    <Add/>
                                </div>
                            </div>
                        </div>
                        <p className="text-zinc-500 my-[10px]">
                            <span className="text-black font-semibold">Ans:- </span>
                            Absolutely not. We are a genuine software store committed to providing real value to our customers.<br/>
                            You’ll receive exactly what is promised,no hidden charges, no tricks. 
                            We also offer support to help <br/>you with installation or any questions. 
                        </p>
                    </div>
                </div>

                <div onClick={()=>{
                    setOpen(prev=>{
                        const updated=[...prev]
                        animation(!updated[1],divRef.current[1],plusRef.current[1])
                        updated[1]=!updated[1]
                        return updated
                    })
                    
                }} ref={el => divRef.current[1] = el} className={`${open[1] && 'faq-card'} cursor-pointer bg-slate-100 rounded-xl overflow-hidden p-[20px] h-[65px]`}>
                    <div>
                        <div className="grid grid-cols-2">
                            <p className="text-black text-[20px]">Can I get support ?</p>
                            <div className="flex justify-end items-center">
                                <div ref={el => plusRef.current[1] = el} className="h-[20px] w-[20px] will-change-transform transform-gpu">
                                    <Add/>
                                </div>
                            </div>
                        </div>
                        <p className="text-zinc-500 my-[10px]">
                            <span className="text-black font-semibold">Ans:- </span>
                            Yes, definitely! We provide full support even after your subscription starts.<br/>
                            Whether you need help with installation, usage, or have any questions our team is here to assist you.<br/>
                            Your success with our software is our priority.
                        </p>
                    </div>
                </div>

                <div onClick={()=>{
                    setOpen(prev=>{
                        const updated=[...prev]
                        animation(!updated[2],divRef.current[2],plusRef.current[2])
                        updated[2]=!updated[2]
                        return updated
                    })
                    
                }} ref={el => divRef.current[2] = el} className={`${open[2] && 'faq-card'} cursor-pointer bg-slate-100 rounded-xl overflow-hidden p-[20px] h-[65px]`}>
                    <div>
                        <div className="grid grid-cols-2">
                            <p className="text-black text-[20px]">Is my data secured ?</p>
                            <div className="flex justify-end items-center">
                                <div ref={el => plusRef.current[2] = el} className="h-[20px] w-[20px] will-change-transform transform-gpu">
                                    <Add/>
                                </div>
                            </div>
                        </div>
                        <p className="text-zinc-500 my-[10px]">
                            <span className="text-black font-semibold">Ans:- </span>
                            Yes, absolutely. We take your data security very seriously.
                            All your information is <br/> encrypted and handled with strict privacy measures.
                            We do not share your data with third parties,<br/>we use secure protocols to protect your account and activity.
                        </p>
                    </div>
                </div>

                <div onClick={()=>{
                    setOpen(prev=>{
                        const updated=[...prev]
                        animation(!updated[3],divRef.current[3],plusRef.current[3])
                        updated[3]=!updated[3]
                        return updated
                    })
                    
                }} ref={el => divRef.current[3] = el} className={`${open[3] && 'faq-card'} cursor-pointer bg-slate-100 rounded-xl overflow-hidden p-[20px] h-[65px]`}>
                    <div>
                        <div className="grid grid-cols-2">
                            <p className="text-black text-[20px]">How to get started ?</p>
                            <div className="flex justify-end items-center">
                                <div ref={el => plusRef.current[3] = el} className="h-[20px] w-[20px] will-change-transform transform-gpu">
                                    <Add/>
                                </div>
                            </div>
                        </div>
                        <p className="text-zinc-500 my-[10px]">
                            <span className="text-black font-semibold">Ans:- </span>
                            1.Choose a plan that fits your needs.<br/>
                            2.Create your account with a few quick details.<br/>
                            3.Access your dashboard and start using the software right away.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lquestion