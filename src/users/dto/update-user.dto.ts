

import { IsNumber, IsOptional, IsString } from "class-validator";
import { Role } from "../schemas/user.schema";

export class UpdateUserDto {
    @IsOptional()
    @IsString()
    readonly name: string;

    @IsOptional()
    @IsNumber()
    readonly age: number;

    
    readonly role: Role;
}