import express from 'express'

import CategoryModel from '../models/Category.js'

const router = express.Router()



// CREATE POST

router.post('/', async (req, res) => {
    try {
        const newCatgory = new CategoryModel(req.body)

        const savedCat = await newCatgory.save()
        res.status(201).json(savedCat)



    } catch (error) {
        res.status(500).json(error)

    }
})

// GET ALL CATEGORIES
router.get('/', async (req, res) => {
    try {
        const cat = await CategoryModel.find()


        res.status(201).json(cat)



    } catch (error) {
        res.status(500).json(error)

    }
})


// GET POST BY ID












export default router
