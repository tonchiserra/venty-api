export class User {
    public id: string
    public name: string
    public description: string

    constructor(data: any){
        this.id = data.id
        this.name = data.name
        this.description = data.description
    }
}