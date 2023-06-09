

import { Role } from "../schemas/user.schema";

export class UpdateUserDto {
    readonly name: string;
    readonly age: number;
    readonly role: Role;
}