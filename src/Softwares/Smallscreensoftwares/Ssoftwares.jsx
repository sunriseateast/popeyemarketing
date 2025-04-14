import Arrow from "../../svg/Arrow"
import Butterfly from "../../svg/Butterfly"
import Cloud from "../../svg/Cloud"
import Connect from "../../svg/Connect"
import Excel from "../../svg/Excel"
import Filter from "../../svg/Filter"
import Location from "../../svg/Location"
import Mobile from "../../svg/Mobile"
import Rightarr from "../../svg/Rightarr"
import "../Softwares.css"
import popeye from "/images/popeye.png"
import Youtube from "../../svg/Youtube"
import { useLocation } from "react-router-dom"
import { useEffect, useRef } from "react"

function Ssoftwares(){
    const location=useLocation()
    const popeyeRef=useRef(null)
    const contactRef=useRef(null)

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
                <p className="text-[30px] font-bold my-[10px] break-all leading-[1.2]">
                    Choose Your Softwares
                </p>
                <div className="border border-zinc-700 flex items-center justify-center max-w-[100px] rounded-[200px] bg-zinc-900 text-black p-[5px]">
                    <p className="text-center text-[10px] text-slate-100">Get Started</p>
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
                    <div className="my-[20px]">
                        <div className="flex items-center justify-center overflow-hidden">
                            <div>
                                <img className="popeye-dashboard h-[155px] w-[250px] drop-shadow" src={popeye} alt="popeye_dashboard" loading="lazy"/>
                            </div>
                        </div>
                       <div className="flex space-x-[30px] my-[10px]">
                            <button className="underline">Downlaod Now</button>
                            <button className="underline">Book a Demo</button>
                       </div>

                        <div className="my-[20px]">
                            <div className="space-y-[20px]">
                                <div>
                                    <p className="font-semibold">Features :</p>
                                </div>
                                <div className="select-none flex flex-col space-y-[8px] cursor-pointer">
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
                    <div className="">
                        <div className="flex justify-center my-[50px]">
                            <p className="text-[25px] text-zinc-600">Coming Soon</p>
                        </div>
                        <div className="my-[100px]">
                            <div className="space-y-[20px]">
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
                                        <button disabled className="cursor-not-allowed p-[9px] bg-slate-100 text-black rounded drop-shadow">Buy Now</button>
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

export default Ssoftwares