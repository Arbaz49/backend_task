import jwt from "jsonwebtoken";
import { tokenCreation } from "../utils/tokenCreation.js";

let users=[{
    username:"Arbaz",
    email:"Arbaz@gmail.com",
    password:"Admin123",
    id:1
},
{
    username:"Arbaz",
    email:"Arbaz@gmail.com",
    password:"Admin123",
    id:2 
}];

const Register=(req,res)=>{
    const username=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    const id=users.length+1;
    const user={id,username,email,password}
    users=[...users,user];
    res.json(201).send({
        message:"success",
        user
    })
}
const Protect=async(req,res,next)=>{
        // console.log("hey",req.headers);
        let authToken = "";
        if (req.headers?.token?.startsWith("Bearer ")) {
          authToken = req.headers?.token.split(" ")[1];
        }
        if (!authToken) {
            res.status(401).json({
                message: "Invalid credintials login again"
            })
        }

        try {
            var decoded = jwt.verify(authToken, 'secret');
            console.log(decoded);
            const user=users.filter((el)=>el.id==decoded.id)[0];
                        if(!user){
                            res.send({
                                message: "not found"
                            })
                        }
                        req.user = JSON.stringify(user);
                        next();
          } catch(err) {
            // err
            res.status(401).send(err)
          }         
}

const Login=(req,res)=>{
  const token = tokenCreation(req.body.id);
 const user= users.filter((el)=>req.body.id==el.id)
 const {password,...info}=user
    res.cookie("token", token);
    res.status(200).json({
      message: "success",
      data: info,
      token,
    });

}

export{Login,Register,Protect}