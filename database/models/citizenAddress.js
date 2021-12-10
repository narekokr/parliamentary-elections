"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CitizenAddress extends Model {
    static associate(models) {
      CitizenAddress.belongsTo(models.Citizen, {
        foreignKey: "SSN",
        targetKey: "SSN"
      });

      CitizenAddress.belongsTo(models.Address, {
        foreignKey: "addressId",
        targetKey: "id"
      });
    }
  }
  CitizenAddress.init(
    {
      SSN: DataTypes.INTEGER,
      addressId: DataTypes.INTEGER
    },
    {
      sequelize,
      timestamps: false,
      modelName: "CitizenAddress"
    }
  );
  return CitizenAddress;
};
