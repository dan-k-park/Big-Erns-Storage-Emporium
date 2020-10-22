'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('Locations', [
      {
        address: 'That St &, This St, Porters Lake, NS B3E 1H4, Canada',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        address: 'That St, Porters Lake, NS B3E 1H3, Canada',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Locations', null, {})
  }
};
