import { IUserRepository } from "../../repositories/userRepository/user.repository";
import { DeleteUser } from "./deleteUser";

export class DeleteUserUseCase implements DeleteUser {
    private constructor(private readonly userRepository: IUserRepository) { }

    public static build(userRepository: IUserRepository) {
        return new DeleteUserUseCase(userRepository)
    }

    async execute(userId: string) {
        const user = this.userRepository.findById(userId)
        if (!user) {
            return
        }
        const deletedUser = await this.userRepository.delete(userId)
        return deletedUser
    }
}