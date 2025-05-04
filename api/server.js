import express from 'express';
import cors from 'cors';
import { userRouter } from './routes/userRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';
import { downloadRoutes } from './routes/downloadRoutes.js';

const app=express()
const PORT=5000

//Middlewares
app.use(cors({
    methods:['GET','HEAD','POST']
}))
app.use(express.json())
app.use(errorHandler)

// Routes
app.use('/api/users',userRouter)
app.use('/api/download',downloadRoutes)

app.listen(PORT,()=>{
    console.log("running")
})