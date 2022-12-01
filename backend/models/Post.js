import mongoose from 'mongoose'


// define schema 
const postSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    photo: { type: String, required: String, required: false },
    username: { type: String, required: true },
    categories: { type: Array, required: false },
}, { timestamps: true })

// compiling schema

const PostModel = mongoose.model("Post", postSchema)

export default PostModel