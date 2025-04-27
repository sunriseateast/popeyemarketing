import { mySchmea } from "../../shared-schemas/userSchema.js"

export const submitUserdata=(req,res)=>{
    try{
        const {firstName,phoneNumber}=req.body
        const rmFirstnamex=firstName.trim().replace(/\s+/g, ' ')    //Remove side spaces and middle extra spaces
        const rmPhonenumberx=phoneNumber.trim().replace(/\s+/g, '');   //Remove side spaces and middle extra spaces completely
        
        mySchmea.parse({name:rmFirstnamex,number:rmPhonenumberx})
        res.status(200).json({
            data:true
        })

    }
    catch(error){
        res.status(400).json({
            data:false
        })
    }
}
