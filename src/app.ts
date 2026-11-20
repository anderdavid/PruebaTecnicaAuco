import express, { Express } from "express";
import validationsRoutes from "./routes/validations";
import auditoriesRoutes from "./routes/auditory";
const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", validationsRoutes);
app.use("/", auditoriesRoutes);

export default app;
