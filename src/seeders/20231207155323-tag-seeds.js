'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('tags', [
      {
        tag_name: 'Quality',
      },
      {
        tag_name: 'Awesome',
      },
      {
        tag_name: 'blue',
      },
      {
        tag_name: 'red',
      },
      {
        tag_name: 'green',
      },
      {
        tag_name: 'white',
      },
      {
        tag_name: 'gold',
      },
      {
        tag_name: 'Cheap',
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('tags', null, {});
  }
};
