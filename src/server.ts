import { createUserUseCase } from "./useCases/createUser";

const createUser = async () => {
    const user = await createUserUseCase.execute({ name: "Samuel", email: "samuelribeiromuca@gmail.com", birthOfDate: new Date(), password: '123' })
}
const createUser2 = async () => {
    const user2 = await createUserUseCase.execute({ name: "Cristiano", email: "cristiano@gmail.com", birthOfDate: new Date(), password: '123' })
    const modified = user2.map((item) => {
        return {
            name: item.name
        }
    })
    console.log("user", modified)
}

createUser()
createUser2()