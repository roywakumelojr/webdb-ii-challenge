
exports.up = function(knex) {
    return knex.schema.createTable('cars', function(table) {
        table.increments();
        
        table.string('vin', 64).notNullable();
        table.string('make', 128).notNullable();
        table.string('model', 128).notNullable();
        table.string('mileage', 128).notNullable();

        table.string('transmission', 128);
        table.string('title', 64);
    
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
