exports.up = function(knex) {
  return knex.schema.createTable('sprints', tbl => {
    tbl.increments();
    tbl
      .string('name')
      .unique()
      .notNullable();
    tbl.string('sprintLink').notNullable();
    tbl
      .integer('unitId')
      .references('id')
      .inTable('unit')
      .unsigned()
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      .notNullable();
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('sprints');
};
