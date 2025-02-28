'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('SearchHistories', [
      { query: 'sunset photos', userId: 1, timestamp: new Date(), createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('SearchHistories', null, {});
  },
};
