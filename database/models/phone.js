"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    static associate(models) {
      Phone.belongsTo(models.Citizen, {
        foreignKey: "citizenId",
        targetKey: "id"
      });
    }
  }
  Phone.init(
    {
      citizenId: DataTypes.INTEGER,
      number: DataTypes.INTEGER
    },
    {
      sequelize,
      timestamps: false,
      modelName: "Phone"
    }
  );
  return Phone;
};
