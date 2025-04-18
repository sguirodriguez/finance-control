import { Transaction } from "../../entities/transaction";
import { ITransactionRepository } from "./transaction.repository";
let transactionMemoryLeak: Transaction[] = [];

export class TransactionRepositoryPrisma implements ITransactionRepository{
    public static build(){
        return new TransactionRepositoryPrisma()
    }

    async list(){
        return transactionMemoryLeak
    }

    async save(transaction: Transaction){
        transactionMemoryLeak.push(transaction)
        return
    }

    async update(transaction: Transaction){
        const findIndex = transactionMemoryLeak.findIndex(item => item.id === transaction.id);

        if(findIndex === -1 || findIndex < 0){
            return
        }

        transactionMemoryLeak[findIndex].title = transaction.title;
        transactionMemoryLeak[findIndex].amount = transaction.amount;
        transactionMemoryLeak[findIndex].categoryId = transaction.categoryId;
        transactionMemoryLeak[findIndex].description = transaction.description;

        return
    }

    async delete(id: string) {
        const index = transactionMemoryLeak.findIndex((item) => item.id === id)

        if (index !== -1) {
            transactionMemoryLeak.splice(index, 1);
        }

        return
    }
}