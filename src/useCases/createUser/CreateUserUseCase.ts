import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/userRepository/IUserRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    constructor(private usersRepository: IUserRepository) { }

    public static build(usersRepository: IUserRepository) {
        return new CreateUserUseCase(usersRepository)
    }

    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExist = await this.usersRepository.findByEmail(data.email)
        console.log("find", data.email)
        if (userAlreadyExist) {
            throw new Error("User already exist")
        }
        const user = User.create(data);
        const userRegistered = await this.usersRepository.save(user)
        return userRegistered
    }
}