'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addConstraint('errors', {
      fields: ['studentId'],  
      type: 'foreign key',  
      name: 'user_student_association',  
      references: { //Required field  
        table: 'Students',
        field: 'id'  
      },  
      onDelete: 'cascade',  
      onUpdate: 'cascade'
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeConstraint('errors', {
      fields: ['studentId'],
      type: 'foreign key',  
      name: 'user_student_association',  
      references: { //Required field  
        table: 'Students',  
        field: 'id'  
      },  
      onDelete: 'cascade',  
      onUpdate: 'cascade'  
    })
  }
};