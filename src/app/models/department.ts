import { DataTypes } from "sequelize";
import sequelize from "../../db/conn";
import DepartmentI from "../interfaces/department.interface";

const Department = sequelize.define<DepartmentI>("Department", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
});

export default Department;
