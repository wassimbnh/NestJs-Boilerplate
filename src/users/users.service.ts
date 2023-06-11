import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'
import { Query  } from 'express-serve-static-core';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name)
        private userModel: mongoose.Model<User>
    ){}

    async getUsers(query: Query): Promise<User[]> {

        const resPerPage = 2
        const currentPage = Number(query.page) || 1
        const skip = resPerPage * (currentPage - 1)

        const keyword = query.keyword ? {
            name :{
                $regex: query.keyword,
                $options: 'i'
            }
        } : {}

        const users = await this.userModel.find({...keyword}).limit(resPerPage).skip(skip)
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

    
      
}
