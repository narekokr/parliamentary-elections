'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Party extends Model {
    static associate(models) {
      // define association here
    }
  };
  Party.init({
    name: DataTypes.STRING,
    slogan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Party',
  });
  return Party;
};