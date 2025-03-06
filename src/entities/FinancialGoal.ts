import { v4 as uuidv4 } from 'uuid';

type TypeGoal = 'expense' | 'income' | 'saving'

export class FinacialGoal {
    public id?: string;
    public userId: string;
    public categoryId: string;
    public type: TypeGoal;
    public amount: string;
    public date: Date;

    private constructor(props: Omit<FinacialGoal, 'id'>, id?: string) {
        this.id = id ?? uuidv4();
        this.userId = props.userId;
        this.categoryId = props.categoryId;
        this.type = props.type;
        this.amount = props.amount;
        this.date = props.date;
    }

    public static create({ userId, categoryId, type, amount, date }: FinacialGoal) {
        return new FinacialGoal({ userId, categoryId, type, amount, date })
    }
    public static with(props: FinacialGoal) {
        return new FinacialGoal(props)
    }
}