import { Repository } from "../config/AppInterface.js"
import { Event } from "./event.entity.js"
import { dynamo } from "../helpers/db-client.js"
import { PutCommand, GetCommand, ScanCommand, DeleteCommand } from "@aws-sdk/lib-dynamodb"

export class EventRepository implements Repository<Event> {
    private tableName: string = 'events'

    public async add(item: Event): Promise<Event | undefined> {
        const putCommand = new PutCommand({
            TableName: this.tableName,
            Item: item
        })

        await dynamo.send(putCommand)

        return item
    }


    public async getOne(item: { id: string }): Promise<Event | undefined> {
        const getCommand = new GetCommand({
            TableName: this.tableName,
            Key: {
                id: item.id
            }
        })

        let response = await dynamo.send(getCommand)

        return response.Item as Event
    }

    public async getAll(): Promise<Event[] | undefined> {
        const scanCommand = new ScanCommand({
            TableName: this.tableName
        })

        let response = await dynamo.send(scanCommand)

        return response.Items as Event[]
    }

    public async update(item: Event): Promise<Event | undefined> {
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