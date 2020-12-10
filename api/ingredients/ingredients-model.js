const db = require('../../data/db-config')

module.exports = {
    getRecipesWithIngredient(ing_id) {
        // select
        //     r.recipe_name
        // from recipe_ingredients ri
        // join recipes r
        //     on ri.recipe_id = r.recipe_id
        // where ri.ingredient_id = 1
        return db('recipe_ingredients as ri')
        .join('recipes as r', 'ri.recipe_id', 'r.recipe_id')
        .select('r.recipe_name')
        .where('ri.ingredient_id', ing_id)
    }
}