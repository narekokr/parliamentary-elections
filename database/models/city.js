"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    static associate(models) {
      City.belongsTo(models.District, {
        foreignKey: 'districtName',
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
      modelName: "City"
    }
  );
  return City;
};
