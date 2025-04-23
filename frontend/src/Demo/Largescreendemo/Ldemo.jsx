import Mail from "../../svg/Mail"
import Phone from "../../svg/Phone"
import { useEffect, useState } from "react"
import useDebounce from "../../useDebounce"

function Ldemo(){
    let [firstName,setFirstName]=useState('')
    let [phoneNumber,setPhoneNumber]=useState('')
    let [inputError,setInputError]=useState([])

    const debounce=useDebounce()

    //Validations for Both Imput Boxes
    //For FirstName
    const removeMulmidspaces=firstName.trim().replace(/\s+/g, ' ') //Remove side spaces and middle extra spaces
    const letterCount = removeMulmidspaces.replace(/[^a-zA-Z]/g, "").length;   //Accept char and replace space,gives actual length of string
    const hasNumbers=/\d/.test(removeMulmidspaces);    //Return true only if number is there
    const hasSpecial=/^[a-zA-Z ]+$/.test(removeMulmidspaces); //Return true only if character is present
    
    //For PhoneNumber
    const removeMulmidspaces2=phoneNumber.trim().replace(/\s+/g, '');   //Remove side spaces and middle extra spaces completely
    const isFirstDigitValid = /^[1-9]/.test(removeMulmidspaces2);    //Return true if first digit between 1 to  9
    const numbercount=removeMulmidspaces2.length    //Calculate length of phone numbers
    const onlyNumbers=/^\d+$/.test(removeMulmidspaces2);

    //To update the error
    const updateError=(error,index)=>{
        setInputError(prev=>{
            const newArray=[...prev]
            newArray[index]=error
            return newArray
        })
    }


    useEffect(()=>{
        if(firstName){
            //Update error for name input box
            if(removeMulmidspaces===''){
                updateError("* Name cannot be Empty",0)
            }
            else if(hasNumbers){
                updateError("* Number not accepted",0)
            }
            else if(!hasSpecial){
                updateError('* Special Characters not accepted',0)
            }
            else if(letterCount < 3){
                updateError('* At least 3 characters required',0)
            }
            else{
                updateError('',0)
            }
            
        }

        if(phoneNumber){
             //Update error for number input box
            if(removeMulmidspaces2===''){
                updateError("* Number cannot be empty",1)
            }
            else if(!isFirstDigitValid){
                updateError("* First Digit cannot be Zero/Character",1)
            }
            else if(!onlyNumbers){
                updateError("* Only Numbers Accepted here",1)
            }
            else if(numbercount > 16){
                updateError("* Numbers must be in valid length",1)
            }
            else{
                updateError('',1)
            }
           
        }

    },[firstName,phoneNumber])

   
    const formSubmit=(event)=>{
        event.preventDefault()

        if(removeMulmidspaces===''){
            updateError("* Name cannot be Empty",0)
        }

        if(removeMulmidspaces2===''){
            updateError("* Number cannot be empty",1)
        }

        if(inputError[0]==='' && inputError[1]===''){
            console.log("I just got call")
        }
    }
    
    
    return(
        <div className="my-[100px]">
            <div className="grid grid-cols-2">

                <div>

                </div>

                <div>
                    <div className="bg-[#1A1A1D] px-[25px] py-[50px] rounded-xl relative">
                        
                        <form onSubmit={(e)=>formSubmit(e)} className="space-y-[10px] m-[10px] border border-zinc-600 rounded-xl p-[20px]">
                            <div className="p-[10px]">
                                <input onChange={(e)=>{
                                    debounce(()=>setFirstName(e.target.value))
                                }} 
                                placeholder=" First Name" type="text" id="name" className={`${inputError[0] && 'border-2 border-red-500'} focus:outline-none text-black rounded p-[7px]`}></input>
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