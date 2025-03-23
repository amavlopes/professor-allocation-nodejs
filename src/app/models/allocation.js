"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Allocation extends Model {
    static associate(models) {
      Allocation.belongsTo(models.Professor);
      models.Professor.hasMany(Allocation);

      Allocation.belongsTo(models.Course);
      models.Course.hasMany(Allocation);
    }
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
