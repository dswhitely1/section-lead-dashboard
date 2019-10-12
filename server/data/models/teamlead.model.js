const db = require('../dbConfig');

function findAll() {
  return db('teamLeads');
}

function findBy(filter) {
  return db('teamLeads').where(filter);
}

function findById(id) {
  return db('teamLeads')
    .where({ id })
    .first();
}

async function add(teamLead) {
  const [id] = await db('teamLeads').insert(teamLead);
  return findById(id);
}

async function update(id, teamLead) {
  await db('teamLeads')
    .where({ id })
    .update(teamLead);
  return findById(id);
}

function remove(id) {
  return db('teamLeads')
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
