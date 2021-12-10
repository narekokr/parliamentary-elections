"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Citizen extends Model {
    static associate(models) {}
  }
  Citizen.init(
    {
      SSN: DataTypes.INTEGER,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      DOB: DataTypes.DATE,
      email: DataTypes.STRING,
      gender: DataTypes.STRING
    },
    {
      sequelize,
      timestamps: false,
      modelName: "Citizen"
    }
  );
  return Citizen;
};
