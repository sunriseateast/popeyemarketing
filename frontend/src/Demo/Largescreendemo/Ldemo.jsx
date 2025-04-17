import Mail from "../../svg/Mail"
import Phone from "../../svg/Phone"
import { useEffect, useState} from "react"
import useDebounce from "../../useDebounce"

function Ldemo(){
    let [firstName,setFirstName]=useState('')
    let [phoneNumber,setPhoneNumber]=useState('')
    let [inputError,setInputError]=useState([])

    const debounce=useDebounce()

    const formSubmit=(event)=>{
        event.preventDefault()
        
            const trimmed=firstName.trim()
            const onlySpace=/^[a-zA-Z ]+$/.test(trimmed);
            const letterCount = trimmed.replace(/[^a-zA-Z]/g, "").length;

            if(onlySpace && letterCount >=3){
                setInputError(prev=>{
                    const values=[...prev]
                    values[0]=''
                    return values
                })
            }
            else{
                setInputError(prev=>{
                    const values=[...prev]
                    values[0]='name'
                    return values
                })
            }    
        
    
        
            const trimmed2=phoneNumber.replace(/[+\s\-]/g, "");
            const isValid=/^\+?[1-9]\d{7,14}$/.test(trimmed2);
            if(isValid){
                setInputError(prev=>{
                    const values=[...prev]
                    values[1]=''
                    return values
                })
            }
            else{
                setInputError(prev=>{
                    const values=[...prev]
                    values[1]='phone'
                    return values
                })
            }
    }
    
    return(
        <div className="my-[100px]">
            <div className="grid grid-cols-2">

                <div>

                </div>

                <div>
                    <div className="bg-[#1A1A1D] px-[25px] py-[50px] rounded-xl relative">
                        
                        <form className="space-y-[10px] m-[10px] border border-zinc-600 rounded-xl p-[20px]">
                            <div className="p-[10px]">
                                <input onChange={(e)=>{
                                    debounce(()=>setFirstName(e.target.value))
                                }} 
                                placeholder=" First Name" type="text" id="name" className={`${inputError[0]==="name" && 'border-2 border-red-500'} focus:outline-none text-black rounded p-[7px]`}></input>
                                {inputError[0]==='name' && <p className="absolute text-red-500 text-[12px]">* Invalid Name</p>}
                            </div>      

                            <div className="p-[10px]">
                                <input onChange={(e)=>{
                                    debounce(()=>setPhoneNumber(e.target.value))
                                }} placeholder=" Contact Number" type="text" id="contact" className={`${inputError[1]==="phone" && 'border-2 border-red-500'} focus:outline-none text-black rounded p-[7px]`}></input>
                                {inputError[1]==='phone' && <p className="absolute text-red-500 text-[12px]">* Enter valid Number</p>}
                            </div>
                                
                            <div className="p-[10px]">
                                <button onClick={(e)=>formSubmit(e)} type="submit" className="bg-slate-100 text-black p-[10px] rounded cursor-pointer">Book Now</button>
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