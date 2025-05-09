import axios from 'axios'
import { useState } from 'react'
function useBuynow(){
    const [isVerify,setIsVerify]=useState(null)
    
    const buynow=async(path)=>{
              try{
                const response=await axios.get(path)
                const order_amount=response.data.amount
                const order_id=response.data.id

                const options={
                    "key":'rzp_test_vzUSOt5voCc9Qk',
                    "amount":order_amount,
                    "currency": "INR",
                    "name": "popeyemarketing",
                    "order_id":order_id,
                    "handler": async function (response){
                        try{
                            const rp1_payment_id=response.razorpay_payment_id;
                            const rp1_signature=response.razorpay_signature   
        
                            const result=await axios.post("http://localhost:5000/api/razorpay/verification",
                            {
                                rp1_payment_id,order_id,
                                rp1_signature
                            })
                            setIsVerify(result.data.success)
                        }
                        catch(error){
                            setIsVerify(false)
                        }
                    },
                }

                var rzp1 = new Razorpay(options)    
                rzp1.on('payment.failed', function (response){
                    setIsVerify(false)
                });
                rzp1.open()
            }
            catch(error){
                setIsVerify(false)
            }
        
    }
    return {buynow,isVerify}
}

export default useBuynow