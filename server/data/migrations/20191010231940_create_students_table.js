exports.up = function(knex) {
  return knex.schema.createTable('students', tbl => {
    tbl.increments();
    tbl.string('firstName').notNullable();
    tbl.string('lastName').notNullable();
    tbl.string('cohort').defaultTo(null);
    tbl.string('github').defaultTo(null);
    tbl.string('operatingSystem').defaultTo(null);
    tbl.string('timeZone').defaultTo(null);
    tbl
      .integer('teamLeadId')
      .references('id')
      .inTable('teamLeads')
      .unsigned()
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl.timestamps(true, true);
  });
};
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('students');
};
