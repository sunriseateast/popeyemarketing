import { mySchmea } from "../../shared-schemas/userSchema.js"
import { SendTosheet } from "../bisslogics/sendTosheet.js"
import axios from 'axios'

export const submitUserdata=async(req,res)=>{
    try{
        const {firstName,phoneNumber,token}=req.body
        const rmFirstnamex=firstName.trim().replace(/\s+/g, ' ')    //Remove side spaces and middle extra spaces
        const rmPhonenumberx=phoneNumber.trim().replace(/\s+/g, '');   //Remove side spaces and middle extra spaces completely
        
        mySchmea.parse({name:rmFirstnamex,number:rmPhonenumberx})   //Check zod validations

        const captchaResult=await axios.post(   //Captch verfication
            'https://www.google.com/recaptcha/api/siteverify',
            {},
            {
                params:{
                    secret :'6Le8bycrAAAAAJ-aR7RDI1fOe1jsjf_Sx3yWDPol',
                    response:token
                }
            })
        const {success,score}=captchaResult.data

        if(success===false || score < 0.5){
            res.status(400).json({
                data:false
            })
        }
        else{
            const isError=await SendTosheet(rmFirstnamex,rmPhonenumberx)
            if(isError){
                res.status(400).json({
                    data:false
                })
            }
            else{
                res.status(200).json({
                    data:true
                })
            }
        }
    }
    catch(error){
        res.status(400).json({
            data:false
        })
    }
}
