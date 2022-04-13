import { Column, DataType, Model, Table } from "sequelize-typescript";

interface EmployeeCreation {
    id: number,
    fio: string,
    timesheet_id: number,
    position: string,
    date_employment: Date,
    birth: Date,
    age: number,
    note: string
}

@Table({tableName: 'employee'})
export class Employee extends Model<Employee, EmployeeCreation> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    fio: string;

    @Column({type: DataType.INTEGER, unique: true, allowNull: false})
    timesheet_id: number;

    @Column({type: DataType.STRING, allowNull: false})
    position: string;

    @Column({type: DataType.DATE, allowNull: false})
    date_employment: Date;

    @Column({type: DataType.DATE, allowNull: false})
    birth: Date;

    @Column({type: DataType.INTEGER})
    age: number;

    @Column({type: DataType.STRING})
    note: string;
}