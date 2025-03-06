import { v4 as uuidv4 } from 'uuid';
type CategoryType = "income" | "expense"



export class Category {
    public id: string;
    public name: string;
    public type: CategoryType;
    public date: Date;

    private constructor(props: Omit<Category, 'id'>, id?: string) {
        this.id = id ?? uuidv4();
        this.name = props.name;
        this.type = props.type;
        this.date = props.date;
    }

    public static build({ name, type, date }: Category) {
        return new Category({ name, type, date })
    }
    public static with(props: Category) {
        return new Category(props, props.id)
    }
}