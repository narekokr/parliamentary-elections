"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PollingStation extends Model {
    static associate(models) {
      PollingStation.belongsTo(models.Address, {
        foreignKey: "addressId",
        targetKey: "id"
      });
    }
  }
  PollingStation.init(
    {
      addressId: DataTypes.INTEGER
    },
    {
      sequelize,
      timestamps: false,
      modelName: "PollingStation"
    }
  );
  return PollingStation;
};
