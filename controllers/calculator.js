
let x=100
const getvariable=(req,res)=>{
res.send({
    message:"success",
    x
})
}

const updatevariable=(req,res)=>{
    const value=req.body.value;
    if(!value){
        res.send({
            message:"error",

        })
    }

    res.status(200).json({
        message:"success",
        variable:Number(x)+Number(value)
    })
}

const deletevariable=(req,res)=>{
    res.status(200).json({
        message:"deleted successfully",

    })

}

export {getvariable,updatevariable,deletevariable}