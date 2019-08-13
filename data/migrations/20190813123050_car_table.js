
exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
    table.increments();
    table.string('make').notNullable();
    table.string('model').notNullable();
    table.string('vin', 17).unique().notNullable();
    table.integer('mileage').unsigned().notNullable();
    table.string('transmission');
    table.string('title'); 
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
