"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    static associate(models) {
      Phone.belongsTo(models.Citizen, {
        foreignKey: "SSN",
        targetKey: "SSN"
      });
    }
  }
  Phone.init(
    {
      SSN: DataTypes.INTEGER,
      number: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "Phone"
    }
  );
  return Phone;
};
