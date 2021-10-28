const { UsersModel } = require('../models');

const createUser = async (req, res) => {
  try {
    const user = await UsersModel.createUser(req.body);
    return res
      .status(200)
      .send({ message: 'Hola desde el server con POST!', user });
  } catch (e) {
    return res
      .status(400)
      .send({ message: 'Error al crear usuario', error: e.stack });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await UsersModel.getAllUsers();
    return res
      .status(200)
      .send({ message: 'Hola desde el server con GET!', users });
  } catch (e) {
    return res
      .status(400)
      .send({ message: 'Error al traer usuarios', error: e.stack });
  }
};

const getUserById = async (req, res) => {
    try {
      const { id } = req.params;  
      const user = await UsersModel.getUserById(id);
      return res
        .status(200)
        .send({ message: `Este es tu usuario con el id ${id}`, user });
    } catch (e) {
      return res
        .status(400)
        .send({ message: `Error al traer usuario con el id ${id}`, error: e.stack });
    }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;  
        const { email, password } = req.body;
        const user = await UsersModel.updateUser(email, password, id);
      return res
        .status(200)
        .send({ message: `Usuario actualizado: ${id}`, user });
    } catch (e) {
      return res
        .status(400)
        .send({ message: `Error al actualizar el usuario con el id ${id}`, error: e.stack });
    }
};

const deleteUser = async (req, res) => {
    try {
      const { id } = req.params;  
      const user = await UsersModel.deleteUser(id);
      return res
        .status(200)
        .send({ message: 'Usuario borrado', user});
    } catch (e) {
      return res
        .status(400)
        .send({ message: 'Error al borrar usuario', error: e.stack });
    }
};


module.exports = { createUser, getAllUsers, getUserById, updateUser, deleteUser };