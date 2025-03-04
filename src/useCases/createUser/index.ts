import { PostgresUserRepository } from "../../repositories/userRepository/PostgresUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";


const userRepository = PostgresUserRepository.build();
const createUserUseCase = CreateUserUseCase.build(userRepository);
const createUserController = CreateUserController.build(createUserUseCase)

export { createUserController, createUserUseCase }