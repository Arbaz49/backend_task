import express from 'express';
import cors from 'cors';
import calculatorRouter from "./routes/calculator.js"
import todoRouter from "./routes/todo.js"

const app=express();
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.status(200).json({
        message:"Hello world"
    })
})

app.use("/calculator",calculatorRouter)
app.use("/todo",todoRouter)


app.listen(8000,()=>{
    console.log("listening on port 8000")
})