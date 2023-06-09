import { Injectable } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name)
        private userModel: mongoose.Model<User>
    ){}

    async getUsers(): Promise<User[]> {
        const users = await this.userModel.find()
        return users;
    }

    async createUser(user: User) : Promise<User>{
        const res = await this.userModel.create(user)
        return res;
    }
}
