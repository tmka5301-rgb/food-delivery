import cors from "cors";
import { configDotenv } from "dotenv";
import express, { Application, Request, Response } from "express";
import connectToMongoDB from "./mongodb";
import { foodRouter } from "./routers/food.router";
import { authenticationRouter } from "./routers/authentication.router";
import { foodCategoryRouter } from "./routers/food.category.router";
import { foodOrderRouter } from "./routers/food.order";

configDotenv();
const port = 10000;
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use("/food", foodRouter);
app.use("/auth", authenticationRouter);
app.use("/food-category", foodCategoryRouter);
app.use("/food-order", foodOrderRouter);

app.listen(port, async () => {
  await connectToMongoDB();
  console.log(`Server is running on port ${port}`);
});

