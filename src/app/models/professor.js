"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Professor extends Model {
    static associate(models) {
      Professor.belongsTo(models.Department);
      models.Department.hasMany(Professor);
    }
  }
  Professor.init(
    {
      name: DataTypes.STRING,
    },
    {
      cpf: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Professor",
    }
  );
  return Professor;
};
