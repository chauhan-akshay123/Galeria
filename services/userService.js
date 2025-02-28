const db = require('../models');

const doesUserExist = async (email) => {
  const user = await db.User.findOne({ where: { email } });
  return !!user; // Returns true if user exists, false otherwise
};

const createUser = async (userData) => {
  const user = await db.User.create(userData);
  return user;
};

module.exports = { doesUserExist, createUser };
