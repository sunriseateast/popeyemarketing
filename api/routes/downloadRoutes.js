import express from 'express'
import { Whatsapp } from '../controllers/downloadController.js'

export const downloadRoutes=express.Router()

downloadRoutes.get('/whatsapp-setup',Whatsapp)
downloadRoutes.head('/whatsapp-setup',Whatsapp)