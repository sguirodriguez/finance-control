import { User } from "../../../entities/user";

export interface IUpdateUserRequestDTO {
    id: string;
    name: string;
    password: string;
    email: string;
    birthOfDate: Date;
}

export interface UpdateUser {
    execute(user: IUpdateUserRequestDTO): Promise<User>;
}