import "../Hustle.css"
import Rightarr from "../../svg/Rightarr";
function Shustle(){
    return(
        <div className="flex items-center justify-center my-[90px] overflow-hidden">
            <div>
                <p className="text-[20px] font-bold my-[10px] break-all">Hustle free Installiation and<br/>
                    Activation
                </p>
                <div className="border border-zinc-700 flex items-center justify-center max-w-[100px] rounded-[200px] bg-zinc-900 text-black p-[5px]">
                    <p className="text-center text-[10px] text-slate-100">Get Started</p>
                    <div className="h-[20px] w-[20px] text-slate-100">
                        <Rightarr/>
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <div className="flex flex-col my-[40px] space-y-[10px]">
                            <p className="text-[20px] font-semibold underline">Download</p>
                            <p>
                                Start your journey with a single download.<br/>
                                Install it in seconds and experience powerful features right from the start.
                            </p>
                        </div>

                        <div className="flex flex-col my-[40px] space-y-[10px]">
                            <p className="text-[20px] font-semibold underline">Install</p>
                            <p>
                                Our installer takes care of everything for you.<br/>
                                In just a few clicks, the app will be set up and ready for action
                            </p>
                        </div>

                        <div className="flex flex-col my-[40px] space-y-[10px]">
                            <p className="text-[20px] font-sembold underline">Simple & Friendly</p>
                            <p>You’re all set! Open the app and explore everything it has to offer.<br/>
                            From first launch to full use, the experience is designed to be effortless.</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-rows-2 space-y-[20px]">
                    <div className="flex items-center justify-center">
                       <div className="bg-zinc-800 max-w-[300px] max-h-[230px] rounded-xl overflow-hidden">
                            <div className="m-[20px]">
                                <p className="font-bold">Demo</p>
                                <p className="my-[10px]">
                                Get a firsthand look with our live demo.
                                See exactly how the platform works, explore 
                                key features, and understand the flow all in real-time.
                                </p>
                                <div className="flex my-[20px]">
                                    <button className="bg-slate-100 text-black rounded p-[10px]">Book a Demo</button>
                                </div>
                            </div>
                       </div>
                    </div>
                    <div className="flex items-center justify-center ">
                       <div className="bg-zinc-800 max-w-[300px] max-h-[230px] rounded-xl overflow-hidden">
                            <div className="m-[20px]">
                                <p className="font-bold">Support</p>
                                <p className="my-[10px]">
                                Get a firsthand look with our live demo.
                                See exactly how the platform works, explore 
                                key features, and understand the flow all in real-time.
                                </p>
                                <div className="flex my-[20px] ">
                                    <button className="bg-slate-100 text-black rounded p-[10px]">Get a Support</button>
                                </div>
                            </div>
                       </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Shustle