'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class District extends Model {
    static associate(models) {
      // define association here
    }
  };
  District.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'District',
  });
  return District;
};