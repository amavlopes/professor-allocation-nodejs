import { DataTypes } from "sequelize";
import sequelize from "../../db/conn";
import ProfessorI from "../interfaces/professor.interface";
import Department from "./department";

const Professor = sequelize.define<ProfessorI>("Professor", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  departmentId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING(11),
    allowNull: false,
    unique: true,
    validate: {
      is: /^\d{11}$/,
    },
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
});

Department.hasMany(Professor, {
  foreignKey: "departmentId",
});

Professor.belongsTo(Department, {
  foreignKey: "id",
});

export default Professor;
