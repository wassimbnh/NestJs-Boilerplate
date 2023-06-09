import { Injectable, NotFoundException } from '@nestjs/common';
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

    async getOne(id: string): Promise<User> {
        const user = await this.userModel.findById(id);
      
        if (!user) {
          throw new NotFoundException('User Not Found');
        }
      
        return user;
      }
 
    async updateUser(id: string, user: User): Promise<User>{
        const userUpdated = await this.userModel.findById(id);
        await this.userModel.findByIdAndUpdate(id,user);
        return userUpdated;
    }

    async deleteUser(id: string): Promise<User> {
        const deletedUser = await this.userModel.findByIdAndDelete(id);
        return deletedUser;
      }
      
      
}
