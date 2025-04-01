import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";

export default interface CourseI
  extends Model<InferAttributes<CourseI>, InferCreationAttributes<CourseI>> {
  id: CreationOptional<number>;
  name: string;
  createdAt: CreationOptional<Date>;
  updatedAt: CreationOptional<Date>;
}
