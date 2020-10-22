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
       rented: true,
       start: 2020-01-01,
       price: 50,
       length: 5,
       width: 10,
       userId: 1,
       locationId: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       rented: true,
       start: 2020-04-01,
       price: 25,
       length: 5,
       width: 5,
       userId: 2,
       locationId: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       rented: false,
       start: null,
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
       start: 2019-12-31,
       price: 30,
       length: 5,
       width: 7,
       userId: 3,
       locationId: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       rented: false,
       start: null,
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
       start: 2020-05-15,
       price: 50,
       length: 5,
       width: 10,
       userId: 4,
       locationId: 2,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       rented: true,
       start: 2020-08-16,
       price: 25,
       length: 5,
       width: 5,
       userId: 4,
       locationId: 2,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
        rented: false,
        start: null,
        price: 50,
        length: 5,
        width: 10,
        userId: null,
        locationId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        rented: false,
        start: null,
        price: 30,
        length: 5,
        width: 7,
        userId: null,
        locationId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        rented: false,
        start: null,
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
