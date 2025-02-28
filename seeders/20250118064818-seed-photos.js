'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Photos', [
      {
        imageUrl: 'http://example.com/photo1.jpg',
        description: 'A beautiful sunset',
        altDescription: 'Sunset view',
        tags: JSON.stringify(['nature', 'sunset']),
        dateSaved: new Date(),
        userId: 1, // Ensure this matches an existing user ID
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Photos', null, {});
  },
};
