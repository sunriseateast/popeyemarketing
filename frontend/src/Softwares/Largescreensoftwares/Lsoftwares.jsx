import Arrow from "../../svg/Arrow"
import Butterfly from "../../svg/Butterfly"
import Cloud from "../../svg/Cloud"
import Connect from "../../svg/Connect"
import Excel from "../../svg/Excel"
import Filter from "../../svg/Filter"
import Location from "../../svg/Location"
import Mobile from "../../svg/Mobile"
import Windows from "../../svg/Winodws"
import Rightarr from "../../svg/Rightarr"
import "../Softwares.css"
import popeye from "/images/popeye.png"
import Apple from "../../svg/Apple"
import Play from "../../svg/Play"
import Youtube from "../../svg/Youtube"
import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"


function Lsoftwares(){
    const location=useLocation()
    const popeyeRef=useRef()
    const contactRef=useRef()

    useEffect(()=>{
        if(location.state?.scrollTo==='popeye-master' && popeyeRef.current){
            popeyeRef.current.scrollIntoView({behavior:'smooth'})
            
        }

        if(location.state?.scrollTo==='contact-exporter' && contactRef.current){
            contactRef.current.scrollIntoView({behavior:'smooth'})
        }
    },[])

    return(
        <div className="text-[#F5F5F4] my-[50px]">
            <div>
                <p className="text-[40px] font-bold my-[10px]">
                   Choose Your Softwares
                </p>
                <div className="border border-zinc-700 flex items-center justify-center max-w-[120px] rounded-[200px] bg-zinc-900 text-black p-[5px]">
                    <p className="text-center text-[15px] text-slate-100">Get Started</p>
                    <div className="h-[20px] w-[20px] text-slate-100">
                        <Rightarr/>
                    </div>
                </div>
            </div>
            <div className="my-[50px] flex flex-col space-y-[50px]">
                <div ref={popeyeRef} className="bg-[#1A1A1D] rounded-[35px] p-[50px] overflow-hidden">
                    <div className="flex items-center">
                        <img src="/images/Whatsapp.png" alt="Whatsapp icon" className="max-h-12 max-w-12" loading="lazy"/>
                        <div className="flex gap-x-[8px]">
                            <p className="text-[20px] font-semibold">Chat Automation</p>
                            <div className="mt-[7px] rounded-xl h-[20px] w-[20px] bg-white drop-shadow-sm flex items-center justify-center">
                                <div className="max-h-[10px] max-w-[10px] text-black">
                                    <Arrow/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-[50px]">

                        <div className="flex items-center justify-center overflow-hidden">
                            <div className="flex flex-col max-h-[350px] max-w-[500px] softwares-outer-card bg-white rounded-[50px] overflow-hidden">
                                <div className="flex flex-col justify-center items-center max-h-[300px] max-w-[500px] p-[20px] softwares-inner-card bg-slate-100 rounded-[50px] border-t border-x">
                                    <div className="">
                                        <div className="grid grid-cols-2 my-[10px] space-x-[145px]">
                                            <div className="flex items-center space-x-[5px]">
                                                <div className="h-[6px] w-[6px] rounded-xl bg-[#38E54D]"></div>
                                                <p className="text-[#DBDBDB] text-[10px] text-center">Available Now</p>
                                            </div>
                                            <div className="flex items-center space-x-[5px]">
                                                <div className="max-h-[10px] max-w-[10px] rounded-xl">
                                                    <Windows/>
                                                </div>
                                                <p className="text-[#DBDBDB] text-[10px] text-center">For Windows</p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <img className="popeye-dashboard max-h-[215px] max-w-[450px]" src={popeye} alt="popeye_dashboard" loading="lazy"/>
                                        </div>   
                                    </div>
                                </div>

                                <div className="flex items-center justify-center space-x-[20px]">
                                    <button className="download-button hover:bg-[#F7F7F7] border border-slate-300 my-[7px] flex items-center justify-center space-x-[7px] max-w-[140px] rounded-[200px] text-black p-[5px]">
                                        <div className="flex items-center justify-center bg-white drop-shadow rounded-[200px] h-[20px] w-[20px]">
                                            <div className="max-h-[10px] max-w-[10px] rotate-90">
                                                <Arrow/>
                                            </div>
                                        </div>
                                    <p className="text-center text-[15px]">Download Now</p>
                                    </button> 

                                    <button className="download-button hover:bg-[#F7F7F7] border border-slate-300 my-[7px] flex items-center justify-center space-x-[7px] max-w-[140px] rounded-[200px] text-black p-[5px]">
                                        <div className="flex items-center justify-center bg-white drop-shadow rounded-[200px] h-[20px] w-[20px]">
                                            <div className="max-h-[10px] max-w-[10px]">
                                                <Play/>
                                            </div>
                                        </div>
                                    <p className="text-center text-[15px]">Book a Demo</p>
                                    </button>  
                                </div>

                            </div>
                        </div>

                        <div className="">
                            <div className="mx-[50px] flex flex-col space-y-[20px]">
                                <div>
                                    <p className="text-[20px] font-semibold">Features :</p>
                                </div>
                                <div className="flex flex-col space-y-[8px] cursor-pointer">
                                    <div className="flex items-center space-x-[5px] group">
                                        <div className="group-hover:shadow-[1px_1px_10px_rgba(255,255,255,0.9)] flex items-center justify-center h-[30px] w-[30px] bg-slate-100 rounded">
                                            <div className="h-[20px] w-[20px] text-black">
                                                <Butterfly/>
                                            </div>
                                        </div>
                                        <p className="text-center">Simple User Interface</p>
                                    </div>
                                    <div className="flex items-center space-x-[5px] group">
                                        <div className="group-hover:shadow-[1px_1px_10px_rgba(255,255,255,0.9)] flex items-center justify-center h-[30px] w-[30px] bg-slate-100 rounded">
                                            <div className="h-[20px] w-[20px] text-black">
                                                <Connect/>
                                            </div>
                                        </div>
                                        <p className="text-center">10 Whatsapp Can Connect</p>
                                    </div>
                                    <div className="flex items-center space-x-[5px] group">
                                        <div className="group-hover:shadow-[1px_1px_10px_rgba(255,255,255,0.9)] flex items-center justify-center h-[30px] w-[30px] bg-slate-100 rounded">
                                            <div className="h-[20px] w-[20px] text-black">
                                                <Location/>
                                            </div>
                                        </div>
                                        <p className="text-center">Step By Step Guidance</p>
                                    </div>
                                    <div className="flex items-center space-x-[5px] group">
                                        <div className="group-hover:shadow-[1px_1px_10px_rgba(255,255,255,0.9)] flex items-center justify-center h-[30px] w-[30px] bg-slate-100 rounded">
                                            <div className="h-[20px] w-[20px] text-black">
                                                <Filter/>
                                            </div>
                                        </div>
                                        <p className="text-center">Quick Filteration</p>
                                    </div>
                                    <div className="flex items-center space-x-[5px] group">
                                        <div className="group-hover:shadow-[1px_1px_10px_rgba(255,255,255,0.9)] flex items-center justify-center h-[30px] w-[30px] bg-slate-100 rounded">
                                            <div className="h-[20px] w-[20px] text-black">
                                                <Cloud/>
                                            </div>
                                        </div>
                                        <p className="text-center">Auto Update</p>
                                    </div>
                                    <div className="flex items-center space-x-[5px] group">
                                        <div className="group-hover:shadow-[1px_1px_10px_rgba(255,255,255,0.9)] flex items-center justify-center h-[30px] w-[30px] bg-slate-100 rounded">
                                            <div className="h-[20px] w-[20px] text-black">
                                                <Excel/>
                                            </div>
                                        </div>
                                        <p className="text-center">Any Excel Format Accepted</p>
                                    </div>
                                    <div className="flex items-center space-x-[5px] group">
                                        <div className="group-hover:shadow-[1px_1px_10px_rgba(255,255,255,0.9)] flex items-center justify-center h-[30px] w-[30px] bg-slate-100 rounded">
                                            <div className="h-[20px] w-[20px] text-black">
                                                <Mobile/>
                                            </div>
                                        </div>
                                        <p className="text-center">No Need To Save Numbers</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-[30px]">
                                        <button className="p-[9px] bg-slate-100 text-black rounded drop-shadow">Buy Now</button>
                                        <div className="flex flex-col items-center">
                                            <p className="underline">Rs.2999/Year</p>
                                            <div className="flex items-center space-x-[5px]">
                                                <div className="max-[15px] max-w-[15px]">
                                                    <Youtube/>
                                                </div>
                                                <a className="text-zinc-600" href="https://www.youtube.com/@popeyemarketing/">Tutorials</a>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-[50px]">
                        <p className="font-semibold">Disclamier</p>
                        <div className="my-[10px]">
                            <p>
                                This software is an unofficial WhatsApp automation tool and is not affiliated with, endorsed, or certified by WhatsApp Inc. or Meta Platforms, Inc. <br/>
                                The use of this tool may violate WhatsApp's Terms of Service, and users acknowledge that there is a risk of account suspension or banning by WhatsApp.<br/>
                                By purchasing and using this software, you accept full responsibility for how it is used, and understand that we are not liable for any consequences,<br/>
                                including number bans, loss of data, or service interruption.
                                We do not use the official WhatsApp Business API, and this product is intended for <br/> users who have reviewed and understood the potential risks involved.<br/>
                                This software is provided "as-is" without warranties of any kind.<br/>
                            </p>
                            <br/>We strongly encourage users to:<br/>
                            <ul className="list-disc list-inside my-[10px]">
                                <li>
                                    Avoid spam or unsolicited messaging
                                </li>
                                <li>
                                    Use personalized, permission-based communication<br/>
                                </li>
                                <li>
                                    Operate within ethical and legal boundaries
                                </li>
                            </ul><br/>
                            <br/>
                            <p className="font-semibold my-[10px]">FAQ</p>                                    
                            <p>
                                1.Why users still buy this kind of softwares ?
                            </p>
                            <p>
                                Simple answers is pricing for per converstion by WhatsApp API is 
                                <span className="text-red-500"> very High.</span>
                            </p>

                            <p className="mt-[20px]">
                                2.I saw same software on other platform in less price ?
                            </p>
                            <p>
                                Exactly where we stand apart for <span className="text-yellow-400">support issue</span> where vendors just bluff<br/>
                                for selling there product at low price.
                            </p>

                            <p className="mt-[20px]">
                                3.Is my data get share like uploaded contacts ?
                            </p>
                            <p>
                                "NO" because software is desktop based we have only 
                                <span className="text-lime-500"> login details</span>.
                            </p>
                        </div>
                    </div>

                </div>

                <div ref={contactRef} className="bg-[#1A1A1D] rounded-[35px] p-[50px] overflow-hidden">

                    <div className="flex items-center my-[20px]">
                        <img src="/images/Extractor3.png" alt="Contacts Export" className="max-h-12 max-w-12" loading="lazy"/>
                        <div className="flex gap-x-[8px]">
                            <p className="text-[20px] font-semibold">Contacts Exporter</p>
                            <div className="mt-[7px] rounded-xl h-[20px] w-[20px] bg-white drop-shadow-sm flex items-center justify-center">
                                <div className="max-h-[10px] max-w-[10px] text-black">
                                    <Arrow/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-[50px]">

                        <div className="flex items-center justify-center overflow-hidden">
                            <div className="flex flex-col max-h-[350px] max-w-[500px] softwares-outer-card bg-white rounded-[50px] overflow-hidden">
                                <div className="overflow-hidden flex max-h-[300px] max-w-[500px] p-[30px] softwares-inner-card bg-slate-100 rounded-[50px] border-t border-x">
                                    <div className="flex flex-col">
                                        <div className="grid grid-cols-2 my-[10px] space-x-[190px]">
                                            <div className="flex items-center space-x-[5px]">
                                                <div className="h-[6px] w-[6px] rounded-xl bg-red-500"></div>
                                                <p className="text-[#DBDBDB] text-[10px] text-center">Coming Soon</p>
                                            </div>
                                            <div className="flex items-center space-x-[5px]">
                                                <div className="max-h-[10px] max-w-[10px] rounded-xl">
                                                    <Windows/>
                                                </div>
                                                <div className="max-h-[10px] max-w-[10px] rounded-xl text-black">
                                                    <Apple/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="my-[50px] self-center">
                                            <p className="text-zinc-500 text-[50px] -rotate-[40deg]">Coming Soon</p>
                                        </div>   
                                    </div>
                                </div>

                                <div className="flex items-center justify-center">
                                    <button disabled className="cursor-not-allowed download-button border border-slate-300 my-[7px] flex items-center justify-center space-x-[7px] max-w-[140px] rounded-[200px] text-black p-[5px]">
                                        <div className="flex items-center justify-center bg-white drop-shadow rounded-[200px] h-[20px] w-[20px]">
                                            <div className="max-h-[10px] max-w-[10px] rotate-90">
                                                <Arrow/>
                                            </div>
                                        </div>
                                    <p className="text-center text-[15px]">Download Now</p>
                                    </button>  
                                </div>

                            </div>
                        </div>

                        <div className="">
                            <div className="mx-[50px] flex flex-col space-y-[20px]">
                                <div>
                                    <p className="text-[20px] font-semibold">Features :</p>
                                </div>
                                <div className="flex flex-col space-y-[8px]">
                                    <div className="blur flex items-center space-x-[5px]">
                                        <div className="flex items-center justify-center h-[30px] w-[30px] bg-slate-100 rounded">
                                            <div className="h-[20px] w-[20px] text-black">
                                                <Butterfly/>
                                            </div>
                                        </div>
                                        <p className="text-center">Simple User Interface</p>
                                    </div>
                                    <div className="flex items-center space-x-[5px] blur">
                                        <div className="flex items-center justify-center h-[30px] w-[30px] bg-slate-100 rounded">
                                            <div className="h-[20px] w-[20px] text-black">
                                                <Connect/>
                                            </div>
                                        </div>
                                        <p className="text-center">10 Whatsapp Can Connect</p>
                                    </div>
                                    <div className="flex items-center space-x-[5px] blur">
                                        <div className="flex items-center justify-center h-[30px] w-[30px] bg-slate-100 rounded">
                                            <div className="h-[20px] w-[20px] text-black">
                                                <Location/>
                                            </div>
                                        </div>
                                        <p className="text-center">Step By Step Guidance</p>
                                    </div>
                                    <div className="flex items-center space-x-[5px] blur">
                                        <div className="flex items-center justify-center h-[30px] w-[30px] bg-slate-100 rounded">
                                            <div className="h-[20px] w-[20px] text-black">
                                                <Filter/>
                                            </div>
                                        </div>
                                        <p className="text-center">Quick Filteration</p>
                                    </div>
                                    <div className="flex items-center space-x-[5px] blur">
                                        <div className="flex items-center justify-center h-[30px] w-[30px] bg-slate-100 rounded">
                                            <div className="h-[20px] w-[20px] text-black">
                                                <Cloud/>
                                            </div>
                                        </div>
                                        <p className="text-center">Auto Update</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-[30px]">
                                        <button disabled className="cursor-not-allowed p-[9px] bg-slate-100 text-black rounded drop-shadow">Free Trial</button>
                                        <p className="underline ">Rs.1999/Year</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-[50px]">
                        <p className="font-semibold my-[10px]">Disclamier</p>
                        <div className="">
                            <p className="blur">
                                This software is an unofficial WhatsApp automation tool and is not affiliated with, endorsed, or certified by WhatsApp Inc. or Meta Platforms, Inc. <br/>
                                The use of this tool may violate WhatsApp's Terms of Service, and users acknowledge that there is a risk of account suspension or banning by WhatsApp.<br/>
                                By purchasing and using this software, you accept full responsibility for how it is used, and understand that we are not liable for any consequences,<br/>
                                including number bans, loss of data, or service interruption.
                                We do not use the official WhatsApp Business API, and this product is intended for <br/> users who have reviewed and understood the potential risks involved.<br/>
                                This software is provided "as-is" without warranties of any kind.<br/>
                                <br/>
                            </p>
                            <p className="blur">
                                Why users still buy this kind of softwares ?
                            </p>
                            <p className="blur">
                                Simple answers is pricing for per converstion by WhatsApp API is very High
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Lsoftwares