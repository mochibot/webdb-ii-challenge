
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sales').del()
    .then(function () {
      // Inserts seed entries
      return knex('sales').insert([
        {
          cars_id: 1, 
          sales: 144542 
        },
        { 
          cars_id: 2, 
          sales: 209146 
        },
        {
          cars_id: 3, 
          sales: 245659 
        }
      ]);
    });
};
