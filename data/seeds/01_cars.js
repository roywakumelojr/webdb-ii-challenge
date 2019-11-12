
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          vin: '5YJXCDE23HF040237',
          make: 'Tesla',
          model: 'Model X',
          mileage: '25,606',
          transmission: 'Automatic',
          title: 'clean'
        },
        { 
          vin: '1C4RJFCT2EC355349',
          make: 'Jeep',
          model: 'Grand Cherokee',
          mileage: '98,472',
          transmission: 'Automatic',
          title: 'clean'
        },
        { 
          vin: '1GNSKBKCXGR333650',
          make: 'Chevrolet',
          model: 'Tahoe LT 4WD',
          mileage: '49,187',
          transmission: 'Automatic',
          title: 'clean'
        },
        { 
          vin: 'JM3KFBCM4J0361676',
          make: 'Mazda',
          model: 'CX-5 Touring AWD',
          mileage: '38,713 ',
          transmission: 'Automatic',
          title: 'clean'
        },
      ]);
    });
};
