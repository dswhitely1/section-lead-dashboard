const db = require('../dbConfig');

function findAll() {
  return db('users').select('id', 'username');
}

function findBy(filter) {
  return db('users')
    .where(filter)
    .first();
}

function findById(id) {
  return db('users')
    .select('id', 'username')
    .where({ id })
    .first();
}

async function add(user) {
  const [id] = await db('users')
    .insert(user)
    .returning('id');
  return findById(id);
}

module.exports = { add, findAll, findById, findBy };
