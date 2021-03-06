const db = require('../dbConfig');

function findAll() {
  return db('attendance');
}

function findBy(filter) {
  return db('attendance').where(filter);
}

function findById(id) {
  return db('attendance').where({ id });
}

function findByStudentId(id) {
  return db('attendance').where('studentId', id);
}

async function add(attendanceData) {
  const [id] = await db('attendance').insert(attendanceData);
  return findById(id);
}

function update(id, attendanceData) {
  db('attendance')
    .where({ id })
    .update(attendanceData);
  return findById(id);
}

function remove(id) {
  return db('attendance')
    .where({ id })
    .del();
}

module.exports = {
  findAll,
  findBy,
  findById,
  findByStudentId,
  add,
  update,
  remove,
};
