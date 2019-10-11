const db = require('../dbConfig');

function findAll() {
  return db('students');
}

function findBy(filter) {
  return db('students').where(filter);
}

function findById(id) {
  return db('students').where({ id });
}

function findByTeamLeadId(id) {
  return db('students').where('teamLeadId', id);
}

async function add(student) {
  const [id] = await db('students').insert(student);
  return findById(id);
}

function update(student) {
  return db('students')
    .where('id', student.id)
    .update(student);
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
