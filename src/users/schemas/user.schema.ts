import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

export enum Role {
   ADMIN = 'admin',
   CLIENT = 'client'
}


@Schema({
    timestamps: true
})

export class User {

    @Prop()
    name: string;

    @Prop()
    age: number

    role: Role
}

export const UserShema = SchemaFactory.createForClass(User);