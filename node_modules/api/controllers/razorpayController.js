import Razorpay from 'razorpay'
import crypto from 'crypto'
import dotenv from 'dotenv'
dotenv.config()

//Function to generate OrederId
const razorpay=async(req,res,amount)=>{
    try{
        
        var instance = new Razorpay(
            { 
                key_id:process.env.RP1_KEY_ID, 
                key_secret: process.env.RP1_KEY_SECRET
            }
        )

        const order=await instance.orders.create({
            amount: amount,
            currency: "INR",
        })
        res.json({id:order.id,amount:order.amount})
    }
    catch(error){
        const error2=new Error("Order Id generation issue")
        error.statusCode=400
        next(error2)
    }
}


//For-Whatsapp Softwares
export const Whatsapp=async(req,res)=>{
    await razorpay(req,res,5000)
}


//To verfiy the payment
export const verfiy=async(req,res,next)=>{
    const {rp1_payment_id,order_id,rp1_signature}=req.body
    
    const generated_signature=crypto
    .createHmac('sha256',process.env.RP1_KEY_SECRET)
    .update(order_id + '|' + rp1_payment_id)
    .digest('hex')

    if (generated_signature == rp1_signature) {
        res.json({
            success:true
        })
        console.log("payment successful")
    }
    else{
        const error=new Error("Verification failed")
        error.statusCode=400
        next(error)
    }
}