import { IUserRepository } from "../../../repositories/userRepository/user.repository";
import { IListUserUseCase } from "./listUser";

class ListUserUsecase implements IListUserUseCase{
    constructor(
        private userRepository: IUserRepository
    ){}

    public static build(userRepository: IUserRepository){
        return new ListUserUsecase(userRepository)
    }

    async execute(){
        const users = await this.userRepository.list();

        return users
    }
}

export default ListUserUsecase