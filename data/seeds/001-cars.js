
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          make: 'Chevrolet',
          model: 'Malibu',
          vin: '1G11B5SL9EF242818', 
          mileage: 73426
        },
        {
          make: 'Mitsubishi',
          model: 'Endeavor',
          vin:'4A4JN2AS6BE031267', 
          mileage: 108437
        },
        {
          make: 'Toyota',
          model: 'Tacoma',
          vin: '3TMJU4GN7FM175045',
          mileage: 42053
        }
      ]);
    });
};
