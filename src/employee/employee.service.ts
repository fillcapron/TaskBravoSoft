import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { Employee } from './employee.model';

@Injectable()
export class EmployeeService {

    constructor(@InjectModel(Employee) private employeeRepository: typeof Employee) { }

    async createEmployee(dto: CreateEmployeeDto) {
        try {
            const employee = await this.employeeRepository.create(dto);
            return employee;
        } catch (e) {
            throw new HttpException('Ошибка создания сотрудника', HttpStatus.BAD_REQUEST);
        }
    }

    async getAllEmployee() {
        const employee = await this.employeeRepository.findAll();
        return employee;
    }

    async updateEmployee(dto: CreateEmployeeDto) {

        try {
            const id = dto.id;
            if (id) {
                console.log(dto)
                const updateEmployee = await this.employeeRepository.update(dto, { where: { id } });
                return { message: `Сотрудник c id = ${updateEmployee} обновлен` };
            }
        } catch (e) {
            console.log(e)
            throw new HttpException('Ошибка обновления сотрудника', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async deleteEmployee(ids: number[]) {
        try {
            const deleteEmployee = await this.employeeRepository.destroy({ where: { id: ids } });
            return { message: 'Удалено успешно' };
        } catch (e) {
            throw new HttpException('Ошибка удаления', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
