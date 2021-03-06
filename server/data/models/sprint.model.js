const db = require('../dbConfig');

function findAll() {
  return db('sprints');
}

function findBy(filter) {
  return db('sprints').where(filter);
}

function findById(id) {
  return db('sprints').where({ id });
}

function findByUnitId(id) {
  return db('sprints').where('unitId', id);
}

async function add(sprint) {
  await db('sprints').insert(sprint);
  return findAll();
}

async function update(id, sprint) {
  await db('sprints')
    .where({ id })
    .update(sprint);
  return findAll();
}

async function remove(id) {
  await db('sprints')
    .where({ id })
    .del();
  return findAll();
}

module.exports = {
  findAll,
  findBy,
  findById,
  findByUnitId,
  add,
  update,
  remove,
};
