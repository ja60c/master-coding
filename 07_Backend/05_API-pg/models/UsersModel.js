const createUser = (email, password, db) => {
    return db
      .query('INSERT INTO users (email, password) VALUES($1, $2) RETURNING *', [
        email,
        password
      ])
      .then(result => result.rows[0])
      .catch(err => console.error(err.stack));
  };

  const getAllUsers = (db) => {
      return db
      .query('SELECT * FROM users')
      .then(result => result.rows)
      .catch(err => console.error(err.stack));
  };

  const getUserById = (id, db) => {
      return db.query('SELECT * FROM users WHERE user_id = $1', [id])
      .then(result => result.rows[0])
      .catch(err => console.error(err.stack));
  };
  
  const updateUser = (id, db) => {
    return db.query('UPDATE users SET email = $1, password = $2 WHERE user_id = $3 RETURNING *', 
    [email, password, id])
      .then(result => result.rows[0])
      .catch(err => console.error(err.stack));
  };
  
  const deleteUser = (id, db) => {
    return db.
    // Lógica de delete
    const { id } = req.params;
  
    // A PARTIR DE AQUÍ VA LA CAPA QUE ACCEDE A LA BASE DE DATOS (MODELS)
    db
      .query('DELETE FROM users WHERE user_id = $1', [id])
      .then(result => {
        return res.status(204).send();
      })
      .catch(err => console.error(err.stack));
  };

  module.exports = { createUser, getAllUsers, getUserById, updateUser };