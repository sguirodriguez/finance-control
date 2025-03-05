import { PostgresUserRepository } from "../../repositories/userRepository/user.repository.prisma";
import { CreateUserController } from "./createUser.controller";
import { CreateUserUseCase } from "./createUser.usecase";

const userRepository = PostgresUserRepository.build();
const createUserUseCase = CreateUserUseCase.build(userRepository);
const createUserController = CreateUserController.build(createUserUseCase)

export { createUserController, createUserUseCase }