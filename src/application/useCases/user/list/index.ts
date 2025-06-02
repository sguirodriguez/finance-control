
import { UserRepositoryPrisma } from "../../../infra/repositories/userRepository/user.repository.prisma";
import ListUserController from "./listUser.controller";
import ListUserUsecase from "./listUser.usecase";

const userRepository = UserRepositoryPrisma.build()
const listUserUseCase = ListUserUsecase.build(userRepository)
const listUserController = ListUserController.build(listUserUseCase)

export { listUserController, listUserUseCase }