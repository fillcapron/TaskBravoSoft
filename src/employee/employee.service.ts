import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { Employee } from './employee.model';

@Injectable()
export class EmployeeService {

    constructor(@InjectModel(Employee) private employeeRepository: typeof Employee) { }

    async createEmployee(dto: CreateEmployeeDto) {
        const employee = await this.employeeRepository.create(dto);
        return employee;
    }

    async getAllEmployee() {
        const employee = await this.employeeRepository.findAll();
        return employee;
    }

    async updateEmployee(dto: CreateEmployeeDto) {

        try {
            const id = dto.id;
            if (id) {
                const updateEmployee = await this.employeeRepository.update(dto, { where: { id } });
                return { message: `Сотрудник c id = ${updateEmployee} обновлен` };
            }
        } catch (e) {
            throw new HttpException('Ошибка обновления сотрудника', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async deleteEmployee(id: number) {
        try {
            const deleteEmployee = await this.employeeRepository.destroy({ where: { id } });
            return {message: `Сотрудник ${deleteEmployee} удален`};
        } catch (e) {
            throw new HttpException('Ошибка удаления сотрудника', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
