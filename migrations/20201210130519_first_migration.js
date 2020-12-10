
exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', table => {
      table.increments('recipe_id')
      table.string('recipe_name', 128).notNullable()
  })
  .createTable('ingredients', table => {
      table.increments('ingredient_id')
      table.string('ingredient_name', 128).notNullable()
  })
  .createTable('steps', table => {
      table.increments('step_id')
      table.integer('step')
        .notNullable().unsigned()
      table.string('instruction')
        .notNullable()
      table.integer('recipe_id')
        .notNullable().unsigned()
        .references('recipe_id').inTable('recipes')
        .onDelete('RESTRICT').onUpdate('RESTRICT')
  })
  .createTable('recipe_ingredients', table => {
      table.increments('recipe_ingredient_id')
      table.integer('recipe_id')
        .notNullable().unsigned()
        .references('recipe_id').inTable('recipes')
      table.integer('ingredient_id')
        .notNullable().unsigned()
        .references('ingredient_id').inTable('ingredients')
      table.string('unit_of_measurement', 128)
        .notNullable().unsigned()
      table.float('quantity')
        .notNullable().unsigned()
        
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('recipe_ingredients')
  .dropTableIfExists('steps')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('recipes')
};
