"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Allocation extends Model {
    static associate(models) {}
  }
  Allocation.init(
    {
      day: DataTypes.INTEGER,
    },
    {
      start: DataTypes.STRING,
    },
    {
      end: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Allocation",
    }
  );
  return Allocation;
};
