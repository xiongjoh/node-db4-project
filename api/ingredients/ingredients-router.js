const express = require('express')
const Ingredients = require('./ingredients-model')

const router = express.Router()

// endpoints

router.get('/:id/recipes', async (req, res) => {
    try{
        const { id } = req.params
        const data = await Ingredients.getRecipesWithIngredient(id)
        res.status(200).json(data)
    } catch(err) {
        res.status(500).json({message:err.message})
    }
})

module.exports = router