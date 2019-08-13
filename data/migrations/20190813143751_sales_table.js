
exports.up = function(knex) {
  return knex.schema.createTable('sales', table => {
    table.integer('sales').unsigned().notNullable();
    table.integer('cars_id').unsigned();
    table.foreign('cars_id').references('cars.id');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('sales');
};
