import { Repository } from "../config/AppInterface.js"
import { User } from "./user.entity.js"
import { dynamo } from "../helpers/db-client.js"
import { PutCommand, GetCommand, ScanCommand, DeleteCommand } from "@aws-sdk/lib-dynamodb"

export class UserRepository implements Repository<User> {
    private tableName: string = 'users'

    public async add(item: User): Promise<User | undefined> {
        const putCommand = new PutCommand({
            TableName: this.tableName,
            Item: {
                PKusers: item.id,
                ...item
            },
        })

        await dynamo.send(putCommand)

        return item
    }


    public async getOne(item: { id: string }): Promise<User | undefined> {
        const getCommand = new GetCommand({
            TableName: this.tableName,
            Key: {
                id: item.id
            }
        })

        let response = await dynamo.send(getCommand)

        return response.Item as User
    }

    public async getAll(): Promise<User[] | undefined> {
        const scanCommand = new ScanCommand({
            TableName: this.tableName
        })

        let response = await dynamo.send(scanCommand)

        return response.Items as User[]
    }

    public async update(item: User): Promise<User | undefined> {
        const putCommand = new PutCommand({
            TableName: this.tableName,
            Item: item
        })

        await dynamo.send(putCommand)

        return item
    }

    public async remove(item: { id: string }): Promise<void> {
        const deleteCommand = new DeleteCommand({
            TableName: this.tableName,
            Key: {
                id: item.id
            }
        })

        await dynamo.send(deleteCommand)
    }
}