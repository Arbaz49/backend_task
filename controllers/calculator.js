
let x=100
//get data
const getvariable=(req,res)=>{
res.send({
    message:"success",
    x
})
}


//update data
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


//delete data
const deletevariable=(req,res)=>{
    res.status(200).json({
        message:"deleted successfully",

    })

}

export {getvariable,updatevariable,deletevariable}