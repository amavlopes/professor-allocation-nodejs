import { DataTypes } from "sequelize";
import sequelize from "../../db/conn";
import CourseI from "../interfaces/course.interface";

const Course = sequelize.define<CourseI>("Course", {
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

export default Course;
