
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name:"rec-1"},
        {recipe_name:"rec-2"},
        {recipe_name:"rec-3"},
        {recipe_name:"rec-4"}
      ]);
    });
};
