const express = require('express')
const Recipes = require('./recipes-model')

const router = express.Router()

// endpoints
router.get('/', async (req, res) => {
    try {
        const data = await Recipes.getRecipes()
        res.json(data)
    } catch(err) {
        res.status(500).json({message:err.message})
    }
})
router.get('/:id/shoppingList', async (req, res) => {
    try {
        const { id } = req.params
        const data = await Recipes.getShoppingList(id)
        res.json(data)
    } catch(err) {
        res.status(500).json({message:err.message})
    }
})
router.get('/:id/instructions', async (req, res) => {
    try {
        const { id } = req.params
        const data = await Recipes.getInstructions(id)
        res.json(data)
    } catch(err) {
        res.status(500).json({message:err.message})
    }
})

module.exports = router