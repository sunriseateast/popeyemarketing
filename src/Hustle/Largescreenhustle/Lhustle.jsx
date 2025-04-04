import Rocket from "../../svg/Rocket"
import "../Hustle.css"
import Rightarr from "../../svg/Rightarr";
function Lhustel(){

    return(
        <div className="flex items-center justify-center my-[90px]">
            <div>
                <p className="text-[40px] font-bold my-[10px]">Hustle free Installiation
                    and Activation
                </p>
                <div className="border border-zinc-700 flex items-center justify-center max-w-[120px] rounded-[200px] bg-zinc-900 text-black p-[5px]">
                    <p className="text-center text-[15px] text-slate-100">Get Started</p>
                    <div className="h-[20px] w-[20px] text-slate-100">
                        <Rightarr/>
                    </div>
                </div>
                <div className="grid grid-cols-2 space-x-[100px]">
                    <div className="">
                        <div className="flex flex-col my-[40px] space-y-[10px]">
                            <p className="text-[20px] font-bold">Download</p>
                            <p>
                                Start your journey with a single download.<br/>
                                Install it in seconds and experience powerful features right from the start.
                            </p>
                        </div>

                        <div className="flex flex-col my-[40px] space-y-[10px]">
                            <p className="text-[20px] font-bold">Install</p>
                            <p>
                                Our installer takes care of everything for you.<br/>
                                In just a few clicks, the app will be set up and ready for action
                            </p>
                        </div>

                        <div className="flex flex-col my-[40px] space-y-[10px]">
                            <p className="text-[20px] font-bold">Simple & Friendly</p>
                            <p>You’re all set! Open the app and explore everything it has to offer.<br/>
                            From first launch to full use, the experience is designed to be effortless.</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-[160px]">
                        <div>
                            <div className="flex items-center justify-center bg-slate-100 h-[130px] w-[130px] rounded-[30px]">
                                <div className="flex items-center justify-center bg-slate-200 h-[100px] w-[100px] rounded-[30px] inner-card">
                                    <div className="flex items-center justify-center bg-slate-100 h-[70px] w-[70px] rounded-[20px] inner-card-2">
                                        <div className="flex items-center justify-center h-[40px] w-[40px] bg-slate-100 inner-card-3 rounded-[12px] ">
                                            <div className="flex items-center justify-center overflow-hidden rounded-xl h-[30px] w-[30px]">
                                                <div className="h-[18px] w-[18px] rocket">
                                                    <Rocket/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Lhustel