
import { User } from "../../entities/user";
import { IUserRepository } from "./user.repository";

//LISKOV --> DEFINE COMO SERÁ IMPLEMENTADO O REPOSITORY, QUALQUER IMPLEMENTAÇÃO DESSA INTERFACE PODE SER USADA NA CRIAÇÃO DE USUÁRIO
//Uma classe deve ser possível ser subistituida por uma subclasse 
// EXEMPLO: TENHO UMA CRIAÇÃO DE USUÁRIO EM POSTGREE E OUTRA EM MYSQL, SE OUTRA REPOSITORY(MONGO) IMPLEMENTA ESSA INTERFACE/CONTRATO E CONSEGUE SUBSTITUIR A PRINCIPAL, CAI NO PRINCIPIO DE LISKOV
export class PostgresUserRepository implements IUserRepository {
    private users: User[] = [];

    public static build() {
        return new PostgresUserRepository();
    }

    async findByEmail(email: string): Promise<User> {
        console.log("find", email)
        const user = this.users.find((item) => item.email = email);

        return user
    }

    async save(user: User): Promise<User[]> {
        this.users.push(user)
        return this.users
    }
}