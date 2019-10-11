const db = require('../dbConfig');

function findAll() {
  return db('units');
}

function findBy(filter) {
  return db('units').where(filter);
}

function findById(id) {
  return db('units').where({ id });
}

async function add(unit) {
  const [id] = await db('units').insert(unit);
  return findById(id);
}

function update(unit) {
  return db('units')
    .where('id', unit.id)
    .update(unit);
}

function remove(id) {
  return db('units')
    .where({ id })
    .del();
}

module.exports = {
  findAll,
  findBy,
  findById,
  add,
  update,
  remove,
};
