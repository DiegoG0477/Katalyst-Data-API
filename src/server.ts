import express from "express";
import morgan from "morgan";
import { Signale } from "signale";
import dotenv from "dotenv";
import { connectToDatabase } from "./database/mongodb";

import { dataRouter } from "./medicalData/infraestructure/MedicalDataRouter";

dotenv.config();

const PORT = process.env.SERVER_PORT ?? 3000;

const app = express();

const signale = new Signale();

app.use(express.json());
app.use(morgan("dev"));
app.use("/medical/data", dataRouter);

app.listen(PORT, async () => {
    await connectToDatabase();
    signale.success("Server online in port " + PORT);
});