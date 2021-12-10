'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Election extends Model {
    static associate(models) {
      // define association here
    }
  };
  Election.init({
    date: DataTypes.DATE
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Election',
  });
  return Election;
};