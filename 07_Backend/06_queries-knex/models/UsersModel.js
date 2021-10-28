const db = require('../db');

const createUser = body => {
  return db('users')
    .insert({ email: body.email, password: body.password })
    .returning('*')
    .then(result => result[0])
    .catch(err => console.error(err.stack));
};

const getAllUsers = () => {
  return db
    .select('*')
    .from('users')
    .then(result => result)
    .catch(err => console.error(err.stack));
};

const getUserById = id => {
    return db
      .select('*')
      .from('users')
      .where({ user_id: id })
      .then(result => result)
      .catch(err => console.error(err.stack));
  };

const updateUser = (email, password, id) => {
    return db
      .update('users')
      .set('email = $1, password = $2')
      .where('user_id = $3')
      .returning('*'),
      [email, password, id]
      .then(result => result)
      .catch(err => console.error(err.stack));
  };

const deleteUser = user_id => {
  return db 
      .delete('*')
      .from('users')
      .where('user_id = $1', [user_id])
      .then(result => result)
      .catch(err => console.error(err.stack));
}

module.exports = { createUser, getAllUsers, getUserById, updateUser, deleteUser };