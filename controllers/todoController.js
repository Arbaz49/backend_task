let arr=[
    {
        task:"eat",
        id:"1"
    }, {
        task:"code",
        id:"2"
    }, {
        task:"sleep",
        id:"2"
    }
]

const getTodo=(req,res)=>{
    res.status(200).json({
        message:"success",
        total:arr.length,
        todo:arr
    })
}

const addTodo=(req,res)=>{
    const todo={
        task:req.body.task,
        id:arr.length+1
    };
    arr.push(todo);
    res.status(201).json({
        message:"success",
        total:arr.length,
        todo:arr
    })
}
const deleteTodo=(req,res)=>{
    let id=req.params.index;
    let element=arr[id]
    if(!element){
        res.send("not found")
    }else{
        const deleted=arr.splice(id,1);
        res.status(200).json({
            message:"deleted successfully",
            arr
        })
    }
}
export {getTodo,addTodo,deleteTodo}