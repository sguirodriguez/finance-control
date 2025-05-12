
import { User } from "../../entities/User";
import { IUserRepository } from "./user.repository";
let usersMemoryLeak: User[] = []
//LISKOV --> DEFINE COMO SERÁ IMPLEMENTADO O REPOSITORY, QUALQUER IMPLEMENTAÇÃO DESSA INTERFACE PODE SER USADA NA CRIAÇÃO DE USUÁRIO
//Uma classe deve ser possível ser subistituida por uma subclasse 
// EXEMPLO: TENHO UMA CRIAÇÃO DE USUÁRIO EM POSTGREE E OUTRA EM MYSQL, SE OUTRA REPOSITORY(MONGO) IMPLEMENTA ESSA INTERFACE/CONTRATO E CONSEGUE SUBSTITUIR A PRINCIPAL, CAI NO PRINCIPIO DE LISKOV
export class UserRepositoryPrisma implements IUserRepository {
    public static build() {
        return new UserRepositoryPrisma();
    }

    async findByEmail(email: string): Promise<User> {
        const user = usersMemoryLeak.find((item) => item.email == email);
        return user
    }

    async save(user: User): Promise<User[]> {
        const hasUser = usersMemoryLeak.find(item=> item.id == user.id)

        if(hasUser){
            return 
        }
    
        usersMemoryLeak.push(user)

        return usersMemoryLeak
    }

    async list() {
        return usersMemoryLeak
    }

    async update(user: User): Promise<User> {
        const foundedUser = usersMemoryLeak.findIndex((item) => item.id === user?.id)

        if (foundedUser === -1 || foundedUser < 0) {
            return
        }
        usersMemoryLeak[foundedUser].name = user.name ? user.name : usersMemoryLeak[foundedUser].name;
        usersMemoryLeak[foundedUser].email = user.email ? user.email : usersMemoryLeak[foundedUser].email;
        usersMemoryLeak[foundedUser].password = user.password ? user.password : usersMemoryLeak[foundedUser].password;
        usersMemoryLeak[foundedUser].birthOfDate = user.birthOfDate ? user.birthOfDate : usersMemoryLeak[foundedUser].birthOfDate;

        return user
    }
    
    async findById(userId: string): Promise<User> {
        const user = usersMemoryLeak.find((item) => item.id = userId);
        if (!user) {
            return
        }

        return user
    }
    
    async delete(id: string) {
        const index = usersMemoryLeak.findIndex((item) => item.id === id)

        if (index !== -1) {
            usersMemoryLeak.splice(index, 1);
        }

        return
    }
}