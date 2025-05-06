import { SendTosheet } from "../bisslogics/sendTosheet.js"
import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

export const submitUserdata=async(req,res,next)=>{
    try{
        const {firstName,phoneNumber,token}=req.body
        const rmFirstnamex=firstName.trim().replace(/\s+/g, ' ')    //Remove side spaces and middle extra spaces
        const rmPhonenumberx=phoneNumber.trim().replace(/\s+/g, '');   //Remove side spaces and middle extra spaces completely
    
        const captchaResult=await axios.post(   //Captch verfication
            'https://www.google.com/recaptcha/api/siteverify',
            {},
            {
                params:{
                    secret :process.env.GOOGLE_CAPTCHA_SECRETE,
                    response:token
                }
            })
        const {success,score}=captchaResult.data

        if(success===false || score < 0.5){
            const error=new Error('Captcha Failed')
            error.statusCode=400
            throw error
        }
        else{
            await SendTosheet(rmFirstnamex,rmPhonenumberx)
            res.status(200).json({
                data:true
            })
        }
    }
    catch(error){
        next(error)
    }
}