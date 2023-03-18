import jwt from "jsonwebtoken";

const tokenCreation=(id)=>{
    return jwt.sign({id},'secret',{
        expiresIn:"1d"
    })
}

export {tokenCreation}