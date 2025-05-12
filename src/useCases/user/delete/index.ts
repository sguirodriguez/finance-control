
import { UserRepositoryPrisma } from "../../../repositories/userRepository/user.repository.prisma";
import { DeleteUserController } from "./deleteUser.controller";
import { DeleteUserUseCase } from "./deleteUser.usecase";

const userRepository = UserRepositoryPrisma.build()
const deleteUserUseCase = DeleteUserUseCase.build(userRepository);
const deleteUserController = DeleteUserController.build(deleteUserUseCase)

export { deleteUserUseCase, deleteUserController }
