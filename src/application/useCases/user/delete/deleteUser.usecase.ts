
import { IUserRepository } from "../../../infra/repositories/userRepository/user.repository";
import { DeleteUser } from "./deleteUser";

export class DeleteUserUseCase implements DeleteUser {
    private constructor(private readonly userRepository: IUserRepository) { }

    public static build(userRepository: IUserRepository) {
        return new DeleteUserUseCase(userRepository)
    }

    async execute(id: string) {
        const user = this.userRepository.findById(id)
        if (!user) {
            return
        }
        const deletedUser = await this.userRepository.delete(id)
        return deletedUser
    }
}