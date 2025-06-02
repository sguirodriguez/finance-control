import { User } from "../../../domain/entities/user";


export interface IListUserUseCase {
    execute(): Promise<User[]>
}