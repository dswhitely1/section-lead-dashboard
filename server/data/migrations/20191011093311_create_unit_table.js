exports.up = function(knex) {
  return knex.schema.createTable('units', tbl => {
    tbl.increments();
    tbl
      .string('name')
      .notNullable()
      .unique();
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists('units');
};
