import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './schemas/user.schema';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService){}

    @Get()
    async getUsers() : Promise<User[]>{
        return this.userService.getUsers();
    }

    @Post('create')
    async createUser(@Body() book ): Promise<User>{
        return this.userService.createUser(book);
    }
}
