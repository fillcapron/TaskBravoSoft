import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtGuards } from 'src/auth/jwt.guards';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
    constructor(private employeeService: EmployeeService) { }

    @UseGuards(JwtGuards)
    @Get()
    getAll() {
        return this.employeeService.getAllEmployee();
    }

    @UseGuards(JwtGuards)
    @Post()
    create(@Body() employeeDto: CreateEmployeeDto) {
        return this.employeeService.createEmployee(employeeDto);
    }

    @UseGuards(JwtGuards)
    @Patch()
    update(@Body() employeeDto: CreateEmployeeDto) {
        return this.employeeService.updateEmployee(employeeDto);
    }

    @UseGuards(JwtGuards)
    @Post('/delete')
    delete(@Body() dto: { ids: number[] }) {
        return this.employeeService.deleteEmployee(dto.ids);
    }
}
