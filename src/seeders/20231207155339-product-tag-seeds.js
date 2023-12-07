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
    await queryInterface.bulkInsert('producttags', [
      {
        product_id: 1,
        tag_id: 6,
      },
      {
        product_id: 1,
        tag_id: 7,
      },
      {
        product_id: 1,
        tag_id: 8,
      },
      {
        product_id: 2,
        tag_id: 6,
      },
      {
        product_id: 3,
        tag_id: 1,
      },
      {
        product_id: 3,
        tag_id: 3,
      },
      {
        product_id: 3,
        tag_id: 4,
      },
      {
        product_id: 3,
        tag_id: 5,
      },
      {
        product_id: 4,
        tag_id: 1,
      },
      {
        product_id: 4,
        tag_id: 2,
      },
      {
        product_id: 4,
        tag_id: 8,
      },
      {
        product_id: 5,
        tag_id: 3,
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
    await queryInterface.bulkDelete('producttags', null, {});
  }
};
