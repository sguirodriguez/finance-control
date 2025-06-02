import { v4 as uuidv4 } from 'uuid';

export enum CategoryType {
    INCOME = 'income',
    EXPENSE = 'expense'
}

export class Category {
    public readonly id?: string;
    public readonly name: string;
    public readonly type: CategoryType;

    constructor(props: Omit<Category, 'id'>, id?: string) {
        this.id = id ?? uuidv4();
        this.name = props.name;
        this.type = props.type;
    }

    public static build({ name, type }: Category) {
        return new Category({ name, type })
    }

    public static with(props: Category) {
        return new Category(props, props.id)
    }
}