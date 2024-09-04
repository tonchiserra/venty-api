export interface IEventDate {
    id:                 string
    date:               Date
    startsAt:           Date
    endsAt:             Date
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
    categories?:        string[]
    status?:            string[]
    cta?:               string
}

export class Event implements IEvent {
    public id: string
    public title: string
    public description: string
    public images: string[]
    public dates: IEventDate[]
    public location: string
    public companyId: string
    public categories?: string[]
    public status?: string[]
    public cta?: string

    constructor(data: any) {
        this.id = data.id
        this.title = data.title
        this.description = data.description
        this.images = data.images
        this.dates = data.dates
        this.location = data.location
        this.companyId = data.companyId
        this.categories = data.categories
        this.status = data.status
        this.cta = data.cta
    }
}