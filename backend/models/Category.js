import mongoose from 'mongoose'


// define schema 
const categorySchema = new mongoose.Schema({
    name: { type: String, required: true }
}, { timestamps: true })

// compiling schema

const CategoryModel = mongoose.model("Category", categorySchema)

export default CategoryModel