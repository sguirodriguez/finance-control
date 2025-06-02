import globalRoutes from "../../application/routes/global";
import userRoutes from "../../application/routes/user"
import categoryRoutes from "../../application/routes/category"
import { Api } from "../api";
import { Express } from "express";

export class ApiExpress implements Api {
    private constructor(private app: Express) { }

    public static build(app: Express) {
        return new ApiExpress(app)
    }

    public start(port: number): void {
        this.app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    }

    public initRoutes() {
        this.app.use(globalRoutes)
        this.app.use('/user', userRoutes)
        this.app.use('/category', categoryRoutes)
    }
}