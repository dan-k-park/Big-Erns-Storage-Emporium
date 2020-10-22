'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Dan',
        lastName: 'Man',
        email: 'danman@gmail.com',
        password: 'user1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'jdoe@gmail.com',
        password: 'user2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'janedoe@gmail.com',
        password: 'user3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Don',
        lastName: 'Joe',
        email: 'dojo@gmail.com',
        password: 'user4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Users', null, {})
  }
};