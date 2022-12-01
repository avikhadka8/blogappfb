import express from 'express'
import dotenv from 'dotenv'
import mongoose from "mongoose"
import authRoute from './routes/auth.js'
import userRoute from './routes/users.js'
import postRoute from './routes/posts.js'
import categoryRoute from './routes/categories.js'
import multer from "multer"
import cors from 'cors'

const app = express()

dotenv.config();
app.use(express.json())
app.use(cors())

// routes
app.use('/api/auth',authRoute)
app.use('/api/users',userRoute)
app.use('/api/posts',postRoute)
app.use('/api/cat',categoryRoute)





mongoose.connect(process.env.DATABASE_URL)
.then(()=>{
    console.log("connected successfully")
})
.catch((error)=>{
    console.log(error)
})

// multer

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, "avinash.jpg");
    },
  });
  
  const upload = multer({ storage: storage });
  app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
  });




app.listen(8000,(req,res)=>{
    console.log(`your server is running `)
})