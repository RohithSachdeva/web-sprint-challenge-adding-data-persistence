
exports.up = function(knex) {
  return knex.schema.createTable('Projects', tbl => {
      tbl.increments();
      tbl.string('Name', 255).notNullable();
      tbl.string('Description');
      tbl.boolean('Completed').defaultTo(false);
  })
};

exports.down = function(knex) {
  
};

