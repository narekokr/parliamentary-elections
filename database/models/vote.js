"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Vote extends Model {
    static associate(models) {
      Vote.belongsTo(models.Citizen, {
        foreignKey: "SSN",
        targetKey: "SSN"
      });

      Vote.belongsTo(models.Party, {
        foreignKey: "partyId",
        targetKey: "id"
      });

      Vote.belongsTo(models.Election, {
        foreignKey: "electionId",
        targetKey: "id"
      });
    }
  }
  Vote.init(
    {
      SSN: DataTypes.INTEGER,
      partyId: DataTypes.INTEGER,
      electionId: DataTypes.INTEGER
    },
    {
      sequelize,
      timestamps: false,
      modelName: "Vote"
    }
  );
  return Vote;
};
