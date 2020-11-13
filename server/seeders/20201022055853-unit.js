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
   return queryInterface.bulkInsert('Units', 
   [
     {
       rented: false,
       start: '2004-10-19',
       price: 50,
       length: 5,
       width: 10,
       userId: null,
       locationId: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       rented: true,
       start: '2004-10-19',
       price: 25,
       length: 5,
       width: 5,
       userId: null,
       locationId: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       rented: true,
       start: '2004-10-19',
       price: 25,
       length: 5,
       width: 5,
       userId: null,
       locationId: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       rented: true,
       start: '2004-10-19',
       price: 30,
       length: 5,
       width: 7,
       userId: null,
       locationId: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       rented: true,
       start: '2004-10-19',
       price: 50,
       length: 5,
       width: 10,
       userId: null,
       locationId: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       rented: true,
       start: '2004-10-19',
       price: 50,
       length: 5,
       width: 10,
       userId: null,
       locationId: 2,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       rented: true,
       start: '2004-10-19',
       price: 25,
       length: 5,
       width: 5,
       userId: null,
       locationId: 2,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
        rented: true,
        start: '2004-10-19',
        price: 50,
        length: 5,
        width: 10,
        userId: null,
        locationId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        rented: true,
        start: '2004-10-19',
        price: 30,
        length: 5,
        width: 7,
        userId: null,
        locationId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        rented: true,
        start: '2004-10-19',
        price: 30,
        length: 5,
        width: 7,
        userId: null,
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
    return queryInterface.bulkDelete('Units', null, {})
  }
};
