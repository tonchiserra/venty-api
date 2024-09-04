import { IEvent } from "../event/event.entity"

type UserRole = 'user' | 'company' | 'admin'

export interface IUser {
    id:             string
    name:           string
    email:          string
    password:       string
    location:       string
    role:           UserRole
    description?:   string
    avatar?:        string
    instagram?:     string
    contactLink?:   string
    events?:        IEvent[]
    // reservations: IReservation[]
}

export class User implements IUser {
    public id: string
    public name: string
    public email: string
    public password: string
    public location: string
    public role: UserRole
    public description: string
    public avatar: string
    public instagram: string
    public contactLink: string
    public events: IEvent[]

    constructor(data: any){
        this.id = data.id
        this.name = data.name
        this.email = data.email
        this.password = data.password
        this.location = data.location
        this.role = data.role
        this.description = data.description
        this.avatar = data.avatar
        this.instagram = data.instagram
        this.contactLink = data.contactLink
        this.events = data.events
    }
}