const db = require('../../data/dbConfig.js');

function find() {
  return db('documents');
}

function findAllByUser(user_id) {
  return db('documents')
    .join('users_documents')
    .where({ user_id });
}

function findById(id) {
  return db('documents')
    .where({ id })
    .first();
}

function addDoc(doc) {
  return db('documents')
    .insert(doc)
    .into('documents');
}

function updateDoc(id, changes) {
  return db('documents')
    .where({ id })
    .update(changes);
}

function removeDoc(id) {
  return db('documents')
    .where({ id })
    .del();
}

module.exports = {
  find,
  findAllByUser,
  findById,
  addDoc,
  updateDoc,
  removeDoc,
};
