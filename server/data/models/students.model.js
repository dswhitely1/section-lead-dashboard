const db = require('../dbConfig');

function findAll() {
  return db('students');
}

function findBy(filter) {
  return db('students').where(filter);
}

function findById(id) {
  return db('students')
    .where({ id })
    .first();
}

function findByTeamLeadId(id) {
  return db('students').where('teamLeadId', id);
}

async function add(student) {
  const [id] = await db('students').insert(student);
  return findById(id);
}

function update(id, student) {
  db('students')
    .where({ id })
    .update(student);
  return findById(id);
}

function remove(id) {
  return db('students')
    .where({ id })
    .del();
}

module.exports = {
  findAll,
  findBy,
  findById,
  findByTeamLeadId,
  add,
  update,
  remove,
};
