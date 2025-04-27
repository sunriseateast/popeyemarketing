import Mail from "../../svg/Mail"
import Phone from "../../svg/Phone"
import { useEffect, useState } from "react"
import useDebounce from "../../useDebounce"
import { mySchmea } from "../../../../shared-schemas/userSchema"
import axios from 'axios'

function Ldemo(){

    let [firstName,setFirstName]=useState('')
    let [phoneNumber,setPhoneNumber]=useState('')
    let [inputError,setInputError]=useState([])

    const debounce=useDebounce()
    const rmFirstnamex=firstName.trim().replace(/\s+/g, ' ')    //Remove side spaces and middle extra spaces
    const rmPhonenumberx=phoneNumber.trim().replace(/\s+/g, '');   //Remove side spaces and middle extra spaces completely

    //To update the error
    const updateError=(error,index)=>{
        setInputError(prev=>{
            const newArray=[...prev]
            newArray[index]=error
            return newArray
        })
    }


    useEffect(()=>{
        const result=mySchmea.safeParse({name:rmFirstnamex,number:rmPhonenumberx})
        if(result.success===false){  
            let error=result.error.format()
            if("name" in error){
                let firstnameError=result.error.format().name._errors[0]
                updateError(firstnameError,0)
            }
            else{
                updateError('',0)
            }

            if("number" in error){
                let phonenumberError=result.error.format().number._errors[0]
                updateError(phonenumberError,1)
            }
            else{
                updateError('',1)
            }
        }
        else{
            updateError('',0)
            updateError('',1)
        }
    },[firstName,phoneNumber])


    const formSubmit=async (event)=>{
        event.preventDefault()
        if(inputError[0]==='' && inputError[1]===''){
            console.log("I just got call")

            //Send data to api
            try{
                await axios.post('http://localhost:5000/api/users/submit',{firstName,phoneNumber})
            }
            catch(error){
                console.log("Error while sending data",error)
            }
        }
    }
    
    
    return(
        <div className="my-[100px]">
            <div className="grid grid-cols-2">

                <div className="bg-lime-500">

                </div>

                <div>
                    <div className="bg-[#1A1A1D] px-[25px] py-[50px] rounded-xl relative">
                        
                        <form onSubmit={(e)=>formSubmit(e)} className="space-y-[10px] m-[10px] border border-zinc-600 rounded-xl p-[20px]">
                            <div className="p-[10px]">
                                <input onChange={(e)=>{
                                    debounce(()=>setFirstName(e.target.value))
                                }} 
                                placeholder=" First Name" className={`${inputError[0] && 'border-2 border-red-500'} focus:outline-none text-black rounded p-[7px]`}></input>
                                {inputError[0] && <p className="absolute text-red-500 text-[12px]">{inputError[0]}</p>}
                            </div>      

                            <div className="p-[10px]">
                                <input onChange={(e)=>{
                                    debounce(()=>setPhoneNumber(e.target.value))
                                }}
                                placeholder=" Contact Number" type="text" id="contact" className={`${inputError[1] && 'border-2 border-red-500'} focus:outline-none text-black rounded p-[7px]`}></input>
                                {inputError[1] && <p className="absolute text-red-500 text-[12px]">{inputError[1]}</p>}
                            </div>
                                
                            <div className="p-[10px]">
                                <button type="submit" className={`bg-slate-100 text-black p-[10px] rounded`}>Book Now</button>
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