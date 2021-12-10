"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Observer extends Model {
    static associate(models) {
      Observer.belongsTo(models.Citizen, {
        foreignKey: "SSN",
        targetKey: "SSN"
      });

      Observer.belongsTo(models.PollingStation, {
        foreignKey: "pollingStationId",
        targetKey: "id"
      });

      Observer.belongsTo(models.Election, {
        foreignKey: "electionId",
        targetKey: "id"
      });
    }
  }
  Observer.init(
    {
      SSN: DataTypes.INTEGER,
      pollingStationId: DataTypes.INTEGER,
      electionId: DataTypes.INTEGER
    },
    {
      sequelize,
      timestamps: false,
      modelName: "Observer"
    }
  );
  return Observer;
};
