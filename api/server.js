import express from 'express';
import cors from 'cors';
import { userRouter } from './routes/userRoutes.js';

const app=express()
const PORT=5000

//Middlewares
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/users',userRouter)

app.listen(PORT,()=>{
    console.log("running")
})