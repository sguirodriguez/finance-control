import { User } from "../../entities/user";

export interface IListUserUseCase {
    execute(): Promise<User[]>
}