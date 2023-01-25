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
    await queryInterface.bulkInsert('Users', [{
      name: 'Souvik Roy',
      email: 'roysouvikr112@gmail.com'
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};


// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     return queryInterface.sequelize.transaction(t => {
//       return Promise.all([
//         queryInterface.addColumn('Person', 'petName', {
//           type: Sequelize.DataTypes.STRING
//         }, { transaction: t }),
//         queryInterface.addColumn('Person', 'favoriteColor', {
//           type: Sequelize.DataTypes.STRING,
//         }, { transaction: t })
//       ]);
//     });
//   },
//   down: (queryInterface, Sequelize) => {
//     return queryInterface.sequelize.transaction(t => {
//       return Promise.all([
//         queryInterface.removeColumn('Person', 'petName', { transaction: t }),
//         queryInterface.removeColumn('Person', 'favoriteColor', { transaction: t })
//       ]);
//     });
//   }
// };
