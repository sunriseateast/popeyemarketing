import { mySchmea } from "../../shared-schemas/userSchema.js";

export const validateUser=(req,res,next)=>{
    try{
        const {firstName,phoneNumber}=req.body
        const rmFirstnamex=firstName.trim().replace(/\s+/g, ' ')    //Remove side spaces and middle extra spaces
        const rmPhonenumberx=phoneNumber.trim().replace(/\s+/g, '');   //Remove side spaces and middle extra spaces completely
        
        mySchmea.parse({name:rmFirstnamex,number:rmPhonenumberx})
        next()
    }
    catch(error){
        const newError=new Error("Validation Failed")
        newError.statusCode=400
        next(newError)
    }
}