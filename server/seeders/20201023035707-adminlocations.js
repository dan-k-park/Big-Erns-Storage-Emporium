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
   return queryInterface.bulkInsert('AdminLocations', 
    [
      {
        adminId: 1,
        locationId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        adminId: 1,
        locationId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        adminId: 2,
        locationId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        adminId: 2,
        locationId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        adminId: 3,
        locationId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        adminId: 3,
        locationId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('AdminLocations', null, {})
  }
};
