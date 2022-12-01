import mongoose from 'mongoose'


// define schema 
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    profilePic: { type: String, default: '' },
},{timestamps:true})

// compiling schema

const UserModel = mongoose.model("User",userSchema)

export default UserModel