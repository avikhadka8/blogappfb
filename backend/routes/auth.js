import express, { Router } from "express"
import UserModel from '../models/User.js'
import bcrypt from "bcrypt";


const router = express.Router()



// Register

router.post('/register', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10)
        const hashPass = await bcrypt.hash(req.body.password,salt)
        const newUser = new UserModel({
            username: req.body.username,
            email: req.body.email,
            password: hashPass,
       })
       const user = await newUser.save()
        res.status(200).json(user)


    } catch (error) {
        res.status(500).json(error)
    }
})



// LOGIN



router.post('/login',async (req,res)=>{
try {
    const user = await UserModel.findOne({username:req.body.username})
    !user && res.status(400).json("wrong credentials")

    const validated = await bcrypt.compare(req.body.password,user.password) 
    // console.log(validated)
    !validated && res.status(400).json("wrong credentials")

    const {password, ...others} = user._doc
    res.status(200).json(others)

} catch (error) {
    console.log(error)
}
})




export default router