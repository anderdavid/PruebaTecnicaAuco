import express, { Express } from "express";
import validationsRoutes from "./routes/validations";
const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", validationsRoutes);

export default app;
