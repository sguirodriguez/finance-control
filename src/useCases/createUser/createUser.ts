export interface ICreateUserRequestDTO {
    name: string;
    password: string;
    email: string;
    birthOfDate: Date;
}

export interface CreateUser {
    execute(data: ICreateUserRequestDTO): void;
}