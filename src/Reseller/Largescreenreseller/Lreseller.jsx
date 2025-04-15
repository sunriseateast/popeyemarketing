import { useEffect } from "react"
import "../reseller.css"
import gsap from 'gsap'

function Lreseller(){
    useEffect(()=>{
        gsap.to(".reseller-circle",{
            scale:1.1,
            repeat:-1,
            yoyo:true,
        })

    },[])


    return(
        <div className="my-[100px]">
            <div>
                <div className="relative grid content-center justify-center max-h-[430px] max-w-[340px] p-[150px] rounded-xl bg-white">
                    <div className="h-[200px] w-[200px] rounded-[100px] bg-slate-100 reseller-circle"></div>
                    <p className="absolute text-black top-8 right-3 text-[10px] text-zinc-500">© popeyemarketing</p>
                    <div className="absolute top-0 left-0 h-[430px] w-[190px] rounded-l-xl reseller-upper-card border border-r">
                        <div className="m-[20px]">
                            <div className="space-y-[10px] text-zinc-600 py-[10px]">
                                <p className="font-semibold">Reseller :</p>
                                <p>
                                Access your reseller dashboard to manage 
                                clients.
                                </p>
                                <button className="p-[9px] bg-[#06040D] text-[#F5F5F4] rounded drop-shadow">Reseller Login</button>
                            </div>

                            <div className="space-y-[10px] text-zinc-600 py-[10px]">
                                <p className="font-semibold">Master :</p>
                                <p>
                                Administrator access for all reseller accounts and platform settings.
                                </p>
                                <button className="p-[9px] bg-[#06040D] text-[#F5F5F4] rounded drop-shadow">Master Login</button>
                            </div>
                        </div>
                    </div>
                    <p className="absolute bottom-8 right-3 text-black text-[9px] text-zinc-500">
                        Resellers must manage their<br/>own clients responsibly.<br/>
                        Misuse may lead to account<br/>suspension.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Lreseller