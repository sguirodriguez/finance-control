import { User } from "../../entities/user";
//Interface Segregation --> apenas implementa métodos essenciais e não possue métodos sem relação, nao existe metodos desnecessários
export interface IUserRepository {
    findByEmail(email: string): Promise<User>;
    save(user: User): Promise<User[]>;
    update(user: User): Promise<User>;
    findById(userId: string): Promise<User>;
    delete(userId: string): Promise<void>;
}