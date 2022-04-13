import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { EmployeeController } from './employee.controller';
import { Employee } from './employee.model';
import { EmployeeService } from './employee.service';

@Module({
  controllers: [EmployeeController],
  providers: [EmployeeService],
  imports: [
    SequelizeModule.forFeature([Employee]),
    forwardRef(() => AuthModule) 
  ]
})
export class EmployeeModule {}
