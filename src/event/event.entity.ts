export interface IEventDate {
    date:               string
    startsAt:           string
    endsAt:             string
    totalTickets:       number
    availableTickets:   number
    price?:             number
}

export interface IEvent {
    id:                 string
    title:              string
    description:        string
    images:             string[]
    dates:              IEventDate[]
    location:           string
    companyId:          string
    cta:                string
    categories?:        string[]
}

export class Event implements IEvent {
    public id: string
    public title: string
    public description: string
    public images: string[]
    public dates: IEventDate[]
    public location: string
    public companyId: string
    public cta: string
    public categories?: string[]

    constructor(data: any) {
        this.id = data.id
        this.title = data.title
        this.description = data.description
        this.images = data.images
        this.dates = data.dates
        this.location = data.location
        this.companyId = data.companyId
        this.cta = data.cta
        this.categories = data.categories
    }
}