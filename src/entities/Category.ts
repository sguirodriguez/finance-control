import { v4 as uuidv4 } from 'uuid';
type CategoryType = "income" | "expense"

interface CategoryProperties {
    id: string;
    name: string;
    type: CategoryType;
    date: Date;
}

export class Category {
    public id: string;
    public name: string;
    public type: CategoryType;
    public date: Date;
    private constructor(private props: CategoryProperties) {
        Object.assign(this, props);
    }

    public static build({ name, type, date }: { name: string, type: CategoryType, date: Date }) {
        return new Category({ id: uuidv4(), name, type, date })
    }
    public static with(props: CategoryProperties) {
        return new Category(props)
    }
    public getId() {
        return this.props.id
    }
    public getName() {
        return this.props.name
    }
    public getType() {
        return this.props.type
    }
    public getDate() {
        return this.props.date
    }
}