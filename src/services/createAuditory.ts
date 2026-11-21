import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand, PutCommandInput } from "@aws-sdk/lib-dynamodb";
import { randomUUID } from "node:crypto";

const client = new DynamoDBClient({
 region: "us-east-1",
 endpoint: "http://dynamodb:8000",
 credentials: {
  accessKeyId: "local",
  secretAccessKey: "local",
 },
});

interface IAuditory {
 idDocumento: string;
 fecha: string;
 data?: any;
}

export const createAuditory = async (auditory: IAuditory) => {
 console.log("createAuiditoy", auditory);
 const params: PutCommandInput = {
  TableName: "auditory",
  Item: {
   id: randomUUID(),
   idDocumento: auditory.idDocumento,
   fecha: auditory.fecha,
   data: auditory.data,
  },
 };

 await client.send(new PutCommand(params));
};
