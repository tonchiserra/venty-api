export class ExampleRepository {
    public async exampleRepositoryFunction(): Promise<any> {
        try {
            console.log("Connect this function to a database or any other service")
        
            return { message: 'Connect the repository to a database or any other service' }

        }catch(error: any) {
            throw new Error(error)
        }
    }
}