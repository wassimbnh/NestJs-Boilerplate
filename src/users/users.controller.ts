import { Body, Controller, Get, Post, Param, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/dto-user.dto';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService){}

    @Get()
    async getUsers() : Promise<User[]>{
        return this.userService.getUsers();
    }

    @Post('create')
    async createUser(
        @Body() user : CreateUserDto
        ): Promise<User>{
        return this.userService.createUser(user);
    }

    @Get(':id')
    async getOne(
        @Param('id') id: string
        ) : Promise<User>{
        return this.userService.getOne(id)
    }

    @Put('update/:id')
    async updateUser(
        @Param('id') id: string,
        @Body() user: User
    ): Promise<User>{
        return this.userService.updateUser(id,user);
    }
}
