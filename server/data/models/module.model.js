const db = require('../dbConfig');

function findAll() {
  return db('modules');
}

function findBy(filter) {
  return db('modules').where(filter);
}

function findById(id) {
  return db('modules').where({ id });
}

function findBySprintId(id) {
  return db('modules').where('sprintId', id);
}

async function add(moduleData) {
  const [id] = await db('modules').insert(moduleData);
  return findById(id);
}

function update(id, moduleData) {
  db('modules')
    .where({ id })
    .update(moduleData);
  return findById(id);
}

function remove(id) {
  return db('modules')
    .where({ id })
    .del();
}

module.exports = {
  findAll,
  findBy,
  findById,
  findBySprintId,
  add,
  update,
  remove,
};
