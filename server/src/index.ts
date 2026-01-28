import cors from "cors";
import { configDotenv } from "dotenv";
import express, { Application, Request, Response } from "express";
import connectToMongoDB from "./mongodb";
import { foodRouter } from "./routers/food.router";
import { authenticationRouter } from "./routers/authentication.router";
import { foodCategoryRouter } from "./routers/food.category.router";
import { foodOrderRouter } from "./routers/food.order";

configDotenv();
const port = 8000;
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use("/", foodRouter);
app.use("/auth", authenticationRouter);
app.use("/food-category", foodCategoryRouter);
app.use("/food-order", foodOrderRouter);
// app.use("./food-cart", foodCartRouter);

// //authentication:
// app.get("/auth/refresh", async (req: Request, res: Response) => {
//   res.status(200).send();
// });

// app.post("/auth/sign-in", async (req: Request, res: Response) => {
//   res.status(200).send();
// });

// app.post("/auth/-sign-up", async (req: Request, res: Response) => {
//   res.status(200).send();
// });

// app.post(
//   "/auth/reset-password-request",
//   async (req: Request, res: Response) => {
//     res.status(200).send();
//   },
// );

// app.get(
//   "/auth/verify-reset-password-request",
//   async (req: Request, res: Response) => {
//     res.status(200).send();
//   },
// );

// app.post("/auth/reset-password", async (req: Request, res: Response) => {
//   res.status(200).send();
// });

// //Food:
// app.get("/food/:categoryId", async (req: Request, res: Response) => {
//   res.status(200).send();
// });

// app.get("/food", async (req: Request, res: Response) => {
//   res.status(200).send();
// });

// app.patch("/food/:foodId", async (req: Request, res: Response) => {
//   res.status(200).send();
// });

// app.delete("/food/:foodId", async (req: Request, res: Response) => {
//   res.status(200).send();
// });

// //FoodCategory:
// app.get("/food-category", async (req: Request, res: Response) => {
//   res.status(200).send();
// });

// app.post("/food-category", async (req: Request, res: Response) => {
//   res.status(200).send();
// });

// app.patch(
//   "/food-category/:foodCategory\Id",
//   async (req: Request, res: Response) => {
//     res.status(200).send();
//   },
// );

// app.delete(
//   "/food-category/:foodCategory\Id",
//   async (req: Request, res: Response) => {
//     res.status(200).send();
//   },
// );

// //FoodOrder:

// app.post("/food-order", async (req: Request, res: Response) => {
//   res.status(200).send();
// });

// app.get("/food-order", async (req: Request, res: Response) => {
//   res.status(200).send();
// });

// app.get("/food-order/:userId", async (req: Request, res: Response) => {
//   res.status(200).send();
// });

// app.patch("/food-order/:foodOrderId", async (req: Request, res: Response) => {
//   res.status(200).send();
// });

app.listen(port, async () => {
  await connectToMongoDB();
  console.log(`Server is running on port ${port}`);
});
