import { Role } from "../enums/role.enum";

export interface AppUser {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: Role;
    createdAt: Date;
}
