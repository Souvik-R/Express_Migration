'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Employees', // table name
        'managerId', // new field name
        {
          type: Sequelize.STRING,
          allowNull: true,
          after: 'id'
        },
      )
    ]);
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('users', 'twitter'),
    ]);
  }
};
