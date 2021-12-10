"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Candidate extends Model {
    static associate(models) {
      Candidate.belongsTo(models.Citizen, {
        foreignKey: "SSN",
        targetKey: "id"
      });

      Candidate.belongsTo(models.Party, {
        foreignKey: "partyId",
        targetKey: "id"
      });

      Candidate.belongsTo(models.Election, {
        foreignKey: "electionId",
        targetKey: "id"
      });
    }
  }
  Candidate.init(
    {
      SSN: DataTypes.INTEGER,
      partyId: DataTypes.INTEGER,
      priority: DataTypes.INTEGER,
      electionId: DataTypes.INTEGER
    },
    {
      sequelize,
      timestamps: false,
      modelName: "Candidate"
    }
  );
  return Candidate;
};
