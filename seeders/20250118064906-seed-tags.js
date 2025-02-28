'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Tags', [
      { name: 'nature', photoId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'sunset', photoId: 1, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Tags', null, {});
  },
};
