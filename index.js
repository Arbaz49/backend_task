import express from 'express';
import cors from 'cors';
import calculatorRouter from "./routes/calculator.js"
import todoRouter from "./routes/todo.js"
import userRouter from "./routes/Auth.js"
import { Protect } from './controllers/UserController.js';


const app=express();
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.status(200).json({
        message:"Hello world"
    })
})

app.use("/calculator",Protect,calculatorRouter);
app.use("/todo",Protect,todoRouter);
app.use("/user",userRouter);



app.listen(8000,()=>{
    console.log("listening on port 8000")
})