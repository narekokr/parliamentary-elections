"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Street extends Model {
    static associate(models) {
      Street.belongsTo(models.City, {
        foreignKey: "cityId",
        targetKey: "id"
      });
    }
  }
  Street.init(
    {
      name: DataTypes.STRING,
      cityId: DataTypes.INTEGER
    },
    {
      sequelize,
      timestamps: false,
      modelName: "Street"
    }
  );
  return Street;
};
