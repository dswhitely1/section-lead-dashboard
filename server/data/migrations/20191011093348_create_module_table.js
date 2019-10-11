exports.up = function(knex) {
  return knex.schema.createTable('modules', tbl => {
    tbl.increments();
    tbl
      .string('name')
      .unique()
      .notNullable();
    tbl.string('trainingKit').notNullable();
    tbl
      .integer('sprintId')
      .references('id')
      .inTable('sprints')
      .unsigned()
      .notNullable()
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('modules');
};
