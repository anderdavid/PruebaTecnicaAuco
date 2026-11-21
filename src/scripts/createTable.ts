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
  TableName: "auditory",

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
    TableName: "auditory",
   })
  );

  console.log("La tabla auditory ya existe");
 } catch (error: any) {
  if (error.name === "ResourceNotFoundException") {
   try {
    console.log("La tabla no existe. Creándola...");

    await client.send(new CreateTableCommand(params));

    console.log("Tabla auditory creada correctamente");
   } catch (createError) {
    console.error("No se pudo crear la tabla auditory:", createError);
   }
  } else {
   console.error("Error consultando la tabla auditory:", error);
  }
 }
}

createTable();
