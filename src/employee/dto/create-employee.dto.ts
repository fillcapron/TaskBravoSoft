export class CreateEmployeeDto {
    id: number;
    fio: string;
    timesheet_id: number;
    position: string;
    date_employment: Date;
    birth: Date;
    age: number;
    note: string;
}