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
  const [id] = await db('sprints').insert(sprint);
  return findById(id);
}

function update(sprint) {
  return db('sprints')
    .where('id', sprint.id)
    .update(sprint);
}

function remove(id) {
  return db('sprints')
    .where({ id })
    .del();
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
