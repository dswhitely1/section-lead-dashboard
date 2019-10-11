exports.up = function(knex) {
  return knex.schema.createTable('teamLeads', tbl => {
    tbl.increments();
    tbl.string('firstName').notNullable();
    tbl.string('lastName').notNullable();
    tbl.string('github').defaultTo(null);
    tbl.string('operatingSystem').defaultTo(null);
    tbl.string('timeZone').defaultTo(null);
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('teamLeads');
};
