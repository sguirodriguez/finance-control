import { v4 as uuidv4 } from 'uuid';
//single responsability -> uma classe deve ser responsável por um único ator 
//open-closed -> fechado para modificações, mas aberto a extensões
interface UserProps {
    id?: string;
    name: string;
    email: string;
    password: string;
    birthOfDate: Date
}

export class User {
    public id?: string;
    public name: string;
    public email: string;
    public password: string;
    public birthOfDate: Date;
    private constructor(private props: UserProps) {
        Object.assign(this, props);
    }

    public static create({ name, password, email, birthOfDate }: UserProps) {
        return new User({ id: uuidv4(), name, password, email, birthOfDate })
    }
    public static with(props: UserProps) {
        return new User(props)
    }
    public getId() {
        return this.props.id
    }
    public getName() {
        return this.props.name
    }
    public getEmail() {
        return this.props.email
    }
    public getBirthOfDate() {
        return this.props.birthOfDate
    }
}