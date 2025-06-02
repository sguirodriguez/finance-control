


import { User } from "../../../../domain/entities/user";
import { CreateUser, ICreateUserRequestDTO } from "../../../../domain/usecases/createUser";
import { IUserRepository } from "../../../../infra/repositories/userRepository/user.repository";

//dependecy inversion-> não depende de uma implementação direta/concreta e sim do contrato/interface
export class CreateUserUseCase implements CreateUser {
    constructor(private readonly usersRepository: IUserRepository) { }

    public static build(usersRepository: IUserRepository) {
        return new CreateUserUseCase(usersRepository)
    }

    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExist = await this.usersRepository.findByEmail(data.email)
        if (userAlreadyExist) {
            throw new Error("User already exist")
        }
        const user = User.create(data);

        const userRegistered = await this.usersRepository.save(user)
        return userRegistered
    }
}