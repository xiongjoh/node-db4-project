const db = require('../../data/db-config')

module.exports = {
    getRecipes(){
        return db('recipes')
    },
    getShoppingList(rec_id){
        // select
        //     i.ingredient_name,
        //     ri.unit_of_m,
        //     ri.quantity
        // from recipe_ingredients ri
        // join ingredients i
        //     on ri.ingredient_id = i.ingredient_id
        // where ri.recipe_id = 4

        return db('recipe_ingredients as ri')
        .join('ingredients as i', 'ri.ingredient_id', 'i.ingredient_id')
        .select('i.ingredient_name', 'ri.unit_of_m', 'ri.quantity')
        .where('ri.recipe_id', rec_id)
    },
    getInstructions(rec_id){
        // select
        //     step,
        //     instruction
        // from steps s
        // where s.recipe_id = 2
        // order by step
        return db('steps as s')
        .select('step', 'instruction')
        .where('s.recipe_id', rec_id)
        .orderBy('step')
    },
}