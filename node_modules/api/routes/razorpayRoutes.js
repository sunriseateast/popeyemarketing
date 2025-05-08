import express from 'express'
import { Whatsapp, verfiy } from '../controllers/razorpayController.js'

export const razorpayRouter=express.Router()

razorpayRouter.get('/payment/whatsapp', Whatsapp)
razorpayRouter.post('/verification',verfiy)