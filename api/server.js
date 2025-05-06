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

// Routes
app.use('/api/users',userRouter)
app.use('/api/download',downloadRoutes)

//Middlewares
app.use(errorHandler)

app.listen(PORT,()=>{
    console.log("running")
})