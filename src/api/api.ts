export interface Api {
    start(port: number): void;
    initRoutes(): void;
}