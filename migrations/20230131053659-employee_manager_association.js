'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addConstraint('Employees', {
      fields: ['managerId'],  
      type: 'foreign key',  
      name: 'user_student_association',  
      references: { //Required field  
        table: 'Managers',
        field: 'id'  
      },  
      onDelete: 'cascade',  
      onUpdate: 'cascade'
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeConstraint('Employees', {
      fields: ['managerId'],
      type: 'foreign key',  
      name: 'user_student_association',  
      references: { //Required field  
        table: 'Managers',  
        field: 'id'  
      },  
      onDelete: 'cascade',  
      onUpdate: 'cascade'  
    })
  }
};