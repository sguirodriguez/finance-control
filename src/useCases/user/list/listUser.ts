import { User } from "../../../entities/User";

export interface IListUserUseCase {
    execute(): Promise<User[]>
}