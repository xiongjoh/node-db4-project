
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {recipe_id:1, ingredient_id:1, unit_of_m: 'cup', quantity: 1.5},
        {recipe_id:1, ingredient_id:2, unit_of_m: 'flask', quantity: 1.5},
        {recipe_id:2, ingredient_id:1, unit_of_m: 'handful', quantity: 1.5},
        {recipe_id:2, ingredient_id:4, unit_of_m: 'earful', quantity: 1.5},
        {recipe_id:3, ingredient_id:5, unit_of_m: 'pinch', quantity: 1.5},
        {recipe_id:4, ingredient_id:1, unit_of_m: 'tbps', quantity: 1.5},
        {recipe_id:4, ingredient_id:7, unit_of_m: 'tsp', quantity: 1.5},
      ]);
    });
};
