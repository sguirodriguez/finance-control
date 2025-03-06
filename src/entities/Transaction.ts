import { v4 as uuidv4 } from 'uuid';


export class Transaction {
    public id: string;
    public userId: string;
    public categoryId: string;
    public amount: string;
    public title: string;
    public description: string;

    private constructor(props: Omit<Transaction, 'id'>, id?: string) {
        this.id = id ?? uuidv4();
        this.userId = props.userId;
        this.categoryId = props.title;
        this.amount = props.amount;
        this.title = props.title;
        this.description = props.description;
    }

    public static create({ userId, categoryId, amount, title, description }: Transaction) {
        return new Transaction({ userId, categoryId, amount, title, description })
    }
    public static with(props: Transaction) {
        return new Transaction(props)
    }
}