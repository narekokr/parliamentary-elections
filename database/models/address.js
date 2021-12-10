"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    static associate(models) {
      Address.belongsTo(models.Street, {
        foreignKey: "streetId",
        targetKey: "id"
      });
    }
  }
  Address.init(
    {
      streetId: DataTypes.INTEGER,
      building: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "Address"
    }
  );
  return Address;
};
