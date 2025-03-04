type TypeGoal = 'expense' | 'income' | 'saving'

interface FinancialGoalProperties {
    id?: string;
    userId: string;
    categoryId: string;
    type: TypeGoal;
    amount: string;
    date: Date;
}

export class FinacialGoal {
    public id?: string;
    public userId: string;
    public categoryId: string;
    public type: TypeGoal;
    public amount: string;
    public date: Date;
    private constructor(private props: FinancialGoalProperties) {
        Object.assign(this, props);
    }

    public static create({ userId, categoryId, type, amount, date }: { userId: string, categoryId: string, type: TypeGoal, amount: string, date: Date }) {
        return new FinacialGoal({ userId, categoryId, type, amount, date })
    }
    public static with(props: FinancialGoalProperties) {
        return new FinacialGoal(props)
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
    public getType() {
        return this.props.type
    }
    public getAmount() {
        return this.props.amount
    }
    public getDate() {
        return this.props.date
    }
}