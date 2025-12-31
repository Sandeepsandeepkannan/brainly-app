import express from "express"
import { contentmodel, usermodel } from "./model";
import jwt from "jsonwebtoken";
import { Usermiddleware } from "./middlewares/usermiddleware";
import cors from "cors";
import { connectDB } from "./db";

const jwttokenpass="123482945#$#@"

connectDB();

const app=express()

app.use(express.json())
app.use(cors());  

app.post("/api/v1/signup",async(req,res)=>{

    const username=req.body.username;
    const password=req.body.password;
    const email=req.body.email;
    
     const creation= await usermodel.create({
        username:username,
        password:password,
        email:email
     
    })
    
    if(creation){
    res.json({message:"successfully signed up"})
    }
})

app.post("/api/v1/signin",async(req,res)=>{
   const username=req.body.username;
   const password=req.body.password

   const found=await usermodel.findOne({username,password})

   if(found){
       const userId = found.id;
       const token =jwt.sign({userId:userId},jwttokenpass)  
      
           res.json({message:"Successfully signed in",token})
   }
   else{
          res.json({message:"Sorry ,user credentials are wrong or user not found"})
   }
})



app.post("/api/v1/content",Usermiddleware,async(req,res)=>{
   const title=req.body.title;
   const link=req.body.link
   // @ts-ignore
   const userId=req.userId
   const contentcreation=await contentmodel.create({
    title,
    link,
    userId
   })

   if(contentcreation){
    res.json({mesaage:"Conetent created successfully"})
   }
   else{
     res.json({mesaage:"Could'nt create t"})
   }
   
})
 

app.get("/api/v1/showcontent",Usermiddleware,async(req,res)=>{
   // @ts-ignore 
   const userId=req.userId
   const  usercontent= await contentmodel.find({userId:userId})

   if (usercontent && usercontent.length > 0) {
        res.json({ content: usercontent });
                }
   else {
        res.json({ content: [] });
        }
    })


app.delete("/api/v1/content",Usermiddleware,async(req,res)=>{
   // @ts-ignore
   const userId=req.userId

   const deletecontent= await contentmodel.deleteOne({userId})
   if(deletecontent.deletedCount>0){
    res.json({message:"content deleted successfully"})
   }
   else {
    return res.json({ message: "No content found to delete" });
  }

})


app.listen(3000,()=>{console.log("server is running on port 3000")})