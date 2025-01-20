import { Repository } from "../config/AppInterface.js"
import { Event } from "./event.entity.js"
import { db } from "../helpers/db-client.js"
import { collection, getDocs, doc, getDoc, deleteDoc, setDoc, CollectionReference } from "firebase/firestore"

export class EventRepository implements Repository<Event> {
    private tableName: string = 'events'
    private collectionRef: CollectionReference = collection(db, this.tableName)

    public async add(item: Event): Promise<Event | undefined> {
        await setDoc(doc(this.collectionRef, item.id), item)

        return item
    }

    public async getOne(item: { id: string }): Promise<Event | undefined> {
        const response = await getDoc(doc(this.collectionRef, item.id))

        return response.data() as Event
    }

    public async getAll(): Promise<Event[] | undefined> {
        const response = await getDocs(this.collectionRef)
        const data: Event[] = response.docs.map(doc => doc.data() as Event)
        
        return data
    }

    public async update(item: Event): Promise<Event | undefined> {
        await setDoc(doc(this.collectionRef, item.id), item)

        return item
    }

    public async remove(item: { id: string }): Promise<void> {
        await deleteDoc(doc(this.collectionRef, item.id))
    }
}