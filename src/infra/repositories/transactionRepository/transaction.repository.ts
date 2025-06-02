import { Transaction } from "../../../domain/entities/transaction";

export interface ITransactionRepository {
    list(): Promise<Transaction[] | []>;
    save(transaction: Transaction): Promise<void>;
    update(transaction: Transaction): Promise<void>;
    delete(id:string): Promise<void>;
}