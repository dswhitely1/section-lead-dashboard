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
  await db('units').insert(unit);
  return findAll();
}

async function update(id, unit) {
  await db('units')
    .where({ id })
    .update(unit);
  return findAll();
}

async function remove(id) {
  await db('units')
    .where({ id })
    .del();
  return findAll();
}

module.exports = {
  findAll,
  findBy,
  findById,
  add,
  update,
  remove,
};
