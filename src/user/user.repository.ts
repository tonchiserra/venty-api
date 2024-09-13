import { Repository } from "../config/AppInterface.js"
import { User } from "./user.entity.js"
import { db } from "../helpers/db-client.js"
import { collection, getDocs, doc, getDoc, deleteDoc, setDoc, CollectionReference } from "firebase/firestore"

export class UserRepository implements Repository<User> {
    private tableName: string = 'users'
    private collectionRef: CollectionReference = collection(db, this.tableName)

    public async add(item: User): Promise<User | undefined> {
        await setDoc(doc(this.collectionRef, item.id), item)

        return item
    }


    public async getOne(item: { id: string }): Promise<User | undefined> {
        const response = await getDoc(doc(this.collectionRef, item.id))

        return response.data() as User
    }

    public async getAll(): Promise<User[] | undefined> {
        const response = await getDocs(this.collectionRef)
        const data: User[] = response.docs.map(doc => doc.data() as User)
        
        return data
    }

    public async update(item: User): Promise<User | undefined> {
        await setDoc(doc(this.collectionRef, item.id), item)

        return item
    }

    public async remove(item: { id: string }): Promise<void> {
        await deleteDoc(doc(this.collectionRef, item.id))
    }
}