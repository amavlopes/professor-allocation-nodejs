import {
  CreationOptional,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";

export default interface ProfessorI
  extends Model<
    InferAttributes<ProfessorI>,
    InferCreationAttributes<ProfessorI>
  > {
  id: CreationOptional<number>;
  departmentId: ForeignKey<number>;
  name: string;
  cpf: string;
  createdAt: CreationOptional<Date>;
  updatedAt: CreationOptional<Date>;
}
