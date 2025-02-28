'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Users', [
      { username: 'john_doe', email: 'john@example.com', createdAt: new Date(), updatedAt: new Date() },
      { username: 'jane_doe', email: 'jane@example.com', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
