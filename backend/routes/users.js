import express from 'express';
import bcrypt from 'bcrypt'
import UserModel from '../models/User.js';

const router = express.Router();

// update

router.put('/:id', async (req, res) => {
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10)
            req.body.password = await bcrypt.hash(req.body.password, salt)

        }

        try {
            const updatedUser = await UserModel.findByIdAndUpdate(req.params.id,{$set:req.body},{new :true})
            res.status(200).json(updatedUser);
             

        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(401).json("you can only update your account");

    }
});
// delete

router.delete('/:id', async (req, res) => {
    if (req.body.userId === req.params.id) {
        try {
            const deleteUser = await UserModel.findByIdAndDelete(req.params.id)
            // res.status(200).json(deleteUser);
            res.status(200).json("user has been deleted");


            
        } catch (error) {
           console.log(error) 
        }
    } else {
        res.status(401).json("you can only delete your account");

    }
});

// get 

router.get('/:id',async (req,res)=>{
    try {
        const user = await UserModel.findById(req.params.id)
        const {password,...others} = user._doc
        res.status(200).json(others)

        
    } catch (error) {
        res.status(500).json(error)
    }
})



export default router;
