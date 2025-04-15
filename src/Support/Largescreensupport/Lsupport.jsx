import Mail from "../../svg/Mail"
import Phone from "../../svg/Phone"

function Lsupport(){
    return(
        <div className="my-[50px]">
            <div className="">
                <div className="mx-[60px]">
                    <p className="text-[40px] my-[10px]">
                        Get a Support
                    </p>
                    <p>
                        Our support team is available to assist you from 10:30 AM to 7:00 PM, Monday to Saturday.
                        Whether you need help with setup, billing, or technical issues, we’re here for<br/> you.
                        Feel free to reach out during working hours and we’ll respond promptly.
                        For queries outside office hours, please leave a message — we’ll get back to you the next<br/> business day.
                        Your satisfaction is our priority!
                    </p>
                    <div className="my-[50px] grid justify-items-start">
                        <div className="flex items-center space-x-[5px]">
                            <div className="h-[10px] w-[10px] text-zinc-600">
                                <Phone/>
                            </div>
                            <p className="text-center text-[15px] text-zinc-600">+917862040228</p>
                        </div> 
                        <div className="flex items-center space-x-[5px]">
                            <div className="h-[10px] w-[10px] text-zinc-600">
                                <Mail/>
                            </div>
                            <p className="text-center text-[15px] text-zinc-600">info@popeyemarketing.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lsupport