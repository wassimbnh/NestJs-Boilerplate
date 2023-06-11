import { Body, Controller, Get, Post, Param, Put, Delete, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Query as ExpressQuery } from 'express-serve-static-core';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService){}

    @Get()
    async getUsers(@Query() query: ExpressQuery) : Promise<User[]>{
        return this.userService.getUsers(query);
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
        @Body() user: UpdateUserDto
    ): Promise<User>{
        return this.userService.updateUser(id,user);
    }

    
}
