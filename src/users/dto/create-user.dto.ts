import { Role } from "../schemas/user.schema";
import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsNumber()
    readonly age: number;

    @IsNotEmpty()
    @IsEnum(Role, {message : "Please enter the role"})
    readonly role: Role;
}  