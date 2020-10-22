'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Admins', [
      {
        firstName: 'Ernie',
        lastName: 'Johnson',
        email: 'bigern@gmail.com',
        password: 'admin1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Joel',
        lastName: 'Jackson',
        email: 'joel@gmail.com',
        password: 'admin2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Steve',
        lastName: 'Gelato',
        email: 'mooncolony@gmail.com',
        password: 'admin3',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Admins', null, {})
  }
};
