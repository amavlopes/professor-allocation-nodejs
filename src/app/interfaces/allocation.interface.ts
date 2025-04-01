import {
  CreationOptional,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { DayOfWeek } from "../enums/day-of-week.enum";

export default interface AllocationI
  extends Model<
    InferAttributes<AllocationI>,
    InferCreationAttributes<AllocationI>
  > {
  id: CreationOptional<number>;
  professorId: ForeignKey<number>;
  courseId: ForeignKey<number>;
  day: DayOfWeek;
  startHour: string;
  endHour: string;
  createdAt: CreationOptional<Date>;
  updatedAt: CreationOptional<Date>;
}
