import { PostgresUserRepository } from "../../repositories/userRepository/user.repository.prisma";
import { UpdateUserController } from "./updateUser.controller";
import { UpdateUserUseCase } from "./updateUser.usecase";

const postgresRepository = PostgresUserRepository.build();
const updateUserUseCase = UpdateUserUseCase.build(postgresRepository);
const updateUserController = UpdateUserController.build(updateUserUseCase);

export { updateUserUseCase, updateUserController }
