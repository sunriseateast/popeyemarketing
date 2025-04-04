import Rocket from "../../svg/Rocket"
import "../Hustle.css"
import Rightarr from "../../svg/Rightarr";
function Shustle(){
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
                <div className="">
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
                </div>  
            </div>
        </div>
    )
}

export default Shustle