import {
 DynamoDBClient,
 CreateTableCommand,
 CreateTableCommandInput,
 DescribeTableCommand,
} from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({
 region: "us-east-1",
 endpoint: "http://dynamodb:8000",
 credentials: {
  accessKeyId: "local",
  secretAccessKey: "local",
 },
});

export async function createTable() {
 const params: CreateTableCommandInput = {
  TableName: "Interventory",

  AttributeDefinitions: [
   {
    AttributeName: "id",
    AttributeType: "S",
   },
   {
    AttributeName: "idDocumento",
    AttributeType: "S",
   },
   {
    AttributeName: "fechaPartition",
    AttributeType: "S",
   },
   {
    AttributeName: "fecha",
    AttributeType: "S",
   },
  ],

  KeySchema: [
   {
    AttributeName: "id",
    KeyType: "HASH",
   },
  ],

  GlobalSecondaryIndexes: [
   {
    IndexName: "idDocumentoIndex",
    KeySchema: [
     {
      AttributeName: "idDocumento",
      KeyType: "HASH",
     },
    ],
    Projection: {
     ProjectionType: "ALL",
    },
   },
   {
    IndexName: "fechaIndex",
    KeySchema: [
     {
      AttributeName: "fechaPartition",
      KeyType: "HASH",
     },
     {
      AttributeName: "fecha",
      KeyType: "RANGE",
     },
    ],
    Projection: {
     ProjectionType: "ALL",
    },
   },
  ],

  BillingMode: "PAY_PER_REQUEST",
 };

 try {
  await client.send(
   new DescribeTableCommand({
    TableName: "Interventory",
   })
  );

  console.log("La tabla Interventory ya existe");
  return;
 } catch (error: any) {
  if (error.name !== "ResourceNotFoundException") {
   throw error;
  }
 }

 await client.send(new CreateTableCommand(params));
}

createTable();
