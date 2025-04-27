import express from 'express'
import { submitUserdata } from '../controllers/userController.js'

export const userRouter=express.Router()

router.post('/submit',submitUserdata)