import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";

export default interface DepartmentI
  extends Model<
    InferAttributes<DepartmentI>,
    InferCreationAttributes<DepartmentI>
  > {
  id: CreationOptional<number>;
  name: string;
  createdAt: CreationOptional<Date>;
  updatedAt: CreationOptional<Date>;
}
