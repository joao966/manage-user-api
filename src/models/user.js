const knex = require('./connection');

const getAllUser = async () => {
  try {
    const result = await knex.select('id', 'email').table('users');
    return result;
  } catch (error) {
    console.error('get_all_error: ', error);
  }
};

const getUserByEmail = async (email) => {
  try {
    const result = await knex('users').where('email', email);
    return result;
  } catch (error) {
    console.error('get user by email error: ', error);
  }
};

const createUser = async (email, password) => {
  try {
    const result = await knex('users').insert({ email, password });
    return result;
  } catch (error) {
    console.error('create user error: ', error);
  }
};

const updateUser = async (_id, _email, _password) => {};

const excludeUser = async (_id) => {};

const getUserById = async (_id) => {};

module.exports = {
  getAllUser,
  getUserByEmail,
  createUser,
  getUserById,
  updateUser,
  excludeUser,
};