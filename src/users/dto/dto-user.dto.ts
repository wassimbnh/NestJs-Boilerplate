
import { Role } from "../schemas/user.schema";

export class CreateUserDto {
    readonly name: string;
    readonly age: number;
    readonly role: Role;
}