
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step:1, instruction:'get ingredients', recipe_id:1},
        {step:2, instruction:'cook ingredients', recipe_id:1},
        {step:3, instruction:'eat ingredients', recipe_id:1},
        {step:1, instruction:'get ingredients', recipe_id:2},
        {step:2, instruction:'cook again ingredients', recipe_id:2},
        {step:3, instruction:'eat again ingredients', recipe_id:2},
        {step:1, instruction:'get all ingredients', recipe_id:3},
        {step:2, instruction:'cook all ingredients', recipe_id:3},
        {step:3, instruction:'eat all ingredients', recipe_id:3},
        {step:4, instruction:'dispose all ingredients', recipe_id:3},
        {step:1, instruction:'get 1 ingredients', recipe_id:4},
        {step:2, instruction:'get 2 ingredients', recipe_id:4},
        {step:3, instruction:'get 3 ingredients', recipe_id:4},
      ]);
    });
};
