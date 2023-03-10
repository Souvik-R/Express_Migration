'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employees extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
     Employees.belongsTo(models.Managers);
     models.Managers.hasMany(Employees);
    }
  }
  Employees.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    designation: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Employees',
  });
  return Employees;
};