import { User } from "../../../entities/User";
import { IUserRepository } from "../../../repositories/userRepository/user.repository";
import { IUpdateUserRequestDTO, UpdateUser } from "./updateUser";


export class UpdateUserUseCase implements UpdateUser {
    private constructor(private readonly userRepository: IUserRepository) { }

    public static build(userRepository: IUserRepository) {
        return new UpdateUserUseCase(userRepository)
    }

    async execute(user: IUpdateUserRequestDTO): Promise<User> {
        if (!user.id) {
            throw new Error("ID user required")
        }
        const userAlreadyExist = this.userRepository.findByEmail(user.email)

        if (!userAlreadyExist) {
            throw new Error("This user doesnt exist")
        }

        const withUser = User.with(user)
        const updatedUser = await this.userRepository.update(withUser)

        return updatedUser
    }
}