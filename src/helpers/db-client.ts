import { config } from "../config/config.js"
import { DynamoDBClient } from "@aws-sdk/client-dynamodb"
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb"

const dbClient = new DynamoDBClient({
    region: config.AWS.REGION,
    credentials: {
        accessKeyId: config.AWS.AWS_ACCESS_KEY,
        secretAccessKey: config.AWS.AWS_SECRET_ACCESS_KEY
    }
})

const dynamo = DynamoDBDocumentClient.from(dbClient)

export { dynamo }