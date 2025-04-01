import { DataTypes } from "sequelize";
import sequelize from "../../db/conn";
import AllocationI from "../interfaces/allocation.interface";
import Professor from "./professor";
import Course from "./course";

const Allocation = sequelize.define<AllocationI>("Allocation", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  professorId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  courseId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  day: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: false,
    validate: {
      is: /^[1-7]$/,
    },
  },
  startHour: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  endHour: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
});

Professor.hasMany(Allocation, {
  foreignKey: "professorId",
});

Allocation.belongsTo(Professor, {
  foreignKey: "id",
});

Course.hasMany(Allocation, {
  foreignKey: "courseId",
});

Allocation.belongsTo(Course, {
  foreignKey: "id",
});

export default Allocation;
