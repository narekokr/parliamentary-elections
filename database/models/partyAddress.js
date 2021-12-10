"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PartyAddress extends Model {
    static associate(models) {
      PartyAddress.belongsTo(models.Party, {
        foreignKey: "partyId",
        targetKey: "id"
      });

      PartyAddress.belongsTo(models.Address, {
        foreignKey: "addressId",
        targetKey: "id"
      });
    }
  }
  PartyAddress.init(
    {
      partyId: DataTypes.INTEGER,
      addressId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "PartyAddress"
    }
  );
  return PartyAddress;
};
