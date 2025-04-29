import express from 'express'
import { submitUserdata } from '../controllers/userController.js'
import { validateUser } from '../middleware/validateUser.js'

export const userRouter=express.Router()

userRouter.post('/submit',validateUser,submitUserdata)