
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name:'flour'},
        {ingredient_name:'egg'},
        {ingredient_name:'salt'},
        {ingredient_name:'sugar'},
        {ingredient_name:'cream cheese'},
        {ingredient_name:'ground beef'},
        {ingredient_name:'bread crumbs'},
        {ingredient_name:'pepper'},
      ]);
    });
};
