import express from 'express';
import cors from 'cors';
import { userRouter } from './routes/userRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

const app=express()
const PORT=5000

//Middlewares
app.use(cors())
app.use(express.json())
app.use(errorHandler)

// Routes
app.use('/api/users',userRouter)


app.listen(PORT,()=>{
    console.log("running")
})