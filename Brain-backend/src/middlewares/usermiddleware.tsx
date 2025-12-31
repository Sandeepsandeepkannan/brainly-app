import { Request,Response,NextFunction } from "express";
import  jwt  from "jsonwebtoken";

const jwttokenpass="123482945#$#@"

 export async function Usermiddleware (req:Request,res:Response,next:NextFunction){
   
   const token=req.headers.authorization 
   
   if (!token) {
      return res.json({ msg: "token not found" });
    }
    let decoded: any;
    try {  decoded=jwt.verify(token,jwttokenpass)}
     catch(e){
       return res.json({ msg: "Invalid or expired tokenInvalid or expired token" });
     }
   
     //@ts-ignore
    req.userId = decoded.userId
    
   
    next()
}