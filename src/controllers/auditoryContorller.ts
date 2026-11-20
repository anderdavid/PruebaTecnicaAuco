import { Request, Response } from "express";
import { DynamoDBClient, ScanCommandInput } from "@aws-sdk/client-dynamodb";
import { ScanCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({
 region: "us-east-1",
 endpoint: "http://dynamodb:8000",
 credentials: {
  accessKeyId: "local",
  secretAccessKey: "local",
 },
});

export const getAllAuditories = async (req: Request, res: Response) => {
 const params: ScanCommandInput = {
  TableName: "auditory",
 };

 try {
  const { Items } = await client.send(new ScanCommand(params));

  return res.status(200).send(Items);
 } catch (error) {
  return res.status(500).send({ message: "error listando auditorias" });
 }
};
