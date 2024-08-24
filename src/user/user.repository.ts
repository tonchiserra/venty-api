import { Repository } from "../config/AppInterface"
import { User } from "./user.entity"

export class UserRepository implements Repository<User> {
    public async add(item: User): Promise<User | undefined> {
        return item // I need to connect with DB
    }

    public async getOne(item: { id: string }): Promise<User | undefined> {
        return item // I need to connect with DB
    }

    public async getAll(): Promise<User[] | undefined> {
        return [] // I need to connect with DB
    }

    public async update(id: string, item: User): Promise<User | undefined> {
        return item // I need to connect with DB
    }

    public async remove(item: { id: string }): Promise<User | undefined> {
        return item // I need to connect with DB
    }
}