import { Repository } from "../config/AppInterface"
import { Event } from "./event.entity"

export class EventRepository implements Repository<Event> {
    public async add(item: Event): Promise<Event | undefined> {
        return item // I need to connect with DB
    }

    public async getOne(item: { id: string }): Promise<Event | undefined> {
        return item // I need to connect with DB
    }

    public async getAll(): Promise<Event[] | undefined> {
        return [] // I need to connect with DB
    }

    public async update(id: string, item: Event): Promise<Event | undefined> {
        return item // I need to connect with DB
    }

    public async remove(item: { id: string }): Promise<Event | undefined> {
        return item // I need to connect with DB
    }
}