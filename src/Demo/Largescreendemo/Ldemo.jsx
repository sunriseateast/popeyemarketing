import Mail from "../../svg/Mail"
import Phone from "../../svg/Phone"

function Ldemo(){
    return(
        <div className="my-[100px]">
            <div className="grid grid-cols-2">

                <div>

                </div>

                <div>
                    <div className="bg-[#1A1A1D] px-[25px] py-[50px] rounded-xl relative">
                        
                        <form className="space-y-[10px] m-[10px] border border-zinc-600 rounded-xl p-[20px]">
                            <div className="p-[10px]">
                                <input placeholder=" First Name" type="text" id="name" className="focus:outline-none text-black rounded p-[7px]"></input>
                            </div>      

                            <div className="p-[10px]">
                                <input placeholder=" Contact Number" type="text" id="contact" className="focus:outline-none text-black rounded p-[7px]"></input>
                            </div>
                                
                            <div className="p-[10px]">
                                <input type="submit" value="Book Now" className="bg-slate-100 text-black p-[10px] rounded cursor-pointer"></input>
                            </div>
                        </form>
                        <div className="absolute left-9 grid grid-cols-2 gap-x-[20px]">
                            <div>
                                <div className="flex items-center space-x-[5px]">
                                    <div className="text-zinc-500 h-[10px] w-[10px]">
                                        <Mail/>
                                    </div>
                                    <p className="text-[9px] text-zinc-500">info@popeyemarketing.com</p>
                                </div>
                                <div className="flex items-center space-x-[5px]">
                                    <div className="text-zinc-500 h-[10px] w-[10px]">
                                        <Phone/>
                                    </div>
                                    <p className="text-[9px] text-zinc-500">+917862040228</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-[9px] text-zinc-500 text-end">Mon to Sat</p>
                                <p className="text-[9px] text-zinc-500 text-end">10.30 AM to 7.00 PM IST</p>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Ldemo