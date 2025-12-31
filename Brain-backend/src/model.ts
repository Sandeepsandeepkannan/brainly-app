import mongoose from "mongoose";
import { Schema ,model} from "mongoose";


const userschema=new Schema({
    username:String,
    password:String,
    email:String

})

const contentschema=new Schema({
    title:String,
    link:String,
    userId: {
    type: Schema.Types.ObjectId,
    ref: "user",   // 👈 Name of the user model
    required: true
}})


 export const usermodel= mongoose.model("user",userschema)
 export const contentmodel= mongoose.model("content",contentschema)

