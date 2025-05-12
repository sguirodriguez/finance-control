import { User } from "../../../entities/User";

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