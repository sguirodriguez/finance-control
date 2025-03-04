import { v4 as uuidv4 } from 'uuid';

export interface TransactionProperties {
    id: string;
    userId: string;
    categoryId: string;
    amount: string;
    title: string;
    description: string;
}

export class Transaction {
    public id: string;
    public userId: string;
    public categoryId: string;
    public amount: string;
    public title: string;
    public description: string;
    private constructor(private props: TransactionProperties) {
        Object.assign(this, props);
    }

    public static create({ userId, categoryId, amount, title, description }: { userId: string, categoryId: string, amount: string, title: string, description: string }) {
        return new Transaction({ id: uuidv4(), userId, categoryId, amount, title, description })
    }
    public static with(props: TransactionProperties) {
        return new Transaction(props)
    }
    public getId() {
        return this.props.id
    }
    public getUserId() {
        return this.props.userId
    }
    public getCategoryId() {
        return this.props.categoryId
    }
    public getAmount() {
        return this.props.amount
    }
    public getTitle() {
        return this.props.title
    }
    public getDescription() {
        return this.props.description
    }
}