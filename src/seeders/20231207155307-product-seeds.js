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
   await queryInterface.bulkInsert('products', [
     {
       product_name: 'Tanjiro Action Figure',
       price: 10.99,
       stock: 14,
       category_id: 1,
     },
     {
       product_name: 'Nike Running Sneakers',
       price: 99.9,
       stock: 25,
       category_id: 5,
     },
     {
       product_name: 'Anything Hat',
       price: 22.99,
       stock: 12,
       category_id: 4,
     },
     {
       product_name: 'Black Jeans Shorts',
       price: 12.99,
       stock: 50,
       category_id: 3,
     },
     {
       product_name: 'Cargo Shorts',
       price: 29.99,
       stock: 22,
       category_id: 3,
     },
     {
       product_name: 'Pandas T-Shirts',
       price: 19.99,
       stock: 22,
       category_id: 2,
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
    await queryInterface.bulkDelete('products', null, {});
  }
};
