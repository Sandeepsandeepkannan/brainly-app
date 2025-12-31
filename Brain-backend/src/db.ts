import mongoose from "mongoose";

export async function connectDB() {
  await mongoose.connect("mongodb+srv://admin:VpO5xblTKu14gUOX@cluster0.j77xae8.mongodb.net/mydb");
  console.log("Connected to MongoDB");
}