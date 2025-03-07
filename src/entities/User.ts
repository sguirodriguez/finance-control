import { v4 as uuidv4 } from 'uuid';

export class User {
    public id?: string;
    public name: string;
    public email: string;
    public password: string;
    public birthOfDate: Date;

    private constructor(props: Omit<User, 'id'>, id?: string) {
        this.id = id ?? uuidv4();
        this.name = props.name;
        this.email = props.email;
        this.password = props.password;
        this.birthOfDate = props.birthOfDate;
    }

    public static create({ name, password, email, birthOfDate }: User) {
        return new User({ name, password, email, birthOfDate });
    }
    public static with(props: User) {
        return new User(props, props?.id);
    }
}
