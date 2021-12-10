"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    static associate(models) {
      City.belongsTo(models.District, {
        foreignKey: 'districtId',
        targetKey: 'id'
      })
    }
  }
  City.init(
    {
      name: DataTypes.STRING,
      districtName: DataTypes.STRING
    },
    {
      sequelize,
      timestamps: false,
      modelName: "City"
    }
  );
  return City;
};
