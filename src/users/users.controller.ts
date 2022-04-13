import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtGuards } from 'src/auth/jwt.guards';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {}

    @Post()
    createUser(@Body() userDto: CreateUserDto) {
        return this.userService.createUser(userDto);
    }

    @UseGuards(JwtGuards)
    @Get()
    getAll() {
        return this.userService.getAll();
    }
}
