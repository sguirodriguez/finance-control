
import { User } from "../../entities/User";
import { IUserRepository } from "./IUserRepository";


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