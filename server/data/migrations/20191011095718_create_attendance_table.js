exports.up = function(knex) {
  return knex.schema.createTable('attendance', tbl => {
    tbl.increments();
    tbl
      .integer('studentId')
      .references('id')
      .inTable('students')
      .unsigned()
      .notNullable()
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl
      .integer('moduleId')
      .references('id')
      .inTable('modules')
      .unsigned()
      .notNullable()
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl.string('notes', 1000);
    tbl.boolean('escalated').defaultTo(false);
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists('attendance');
};
