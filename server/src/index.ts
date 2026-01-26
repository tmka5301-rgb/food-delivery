import cors from "cors";
import { configDotenv } from "dotenv";
import express, { Application, Request, Response } from "express";
import connectToMongoDB from "./mongodb";
import { UserModel } from "./schema/user.schema";
import { userRouter } from "./routers/user.router";
import { foodRouter } from "./routers/food.router";
import { foodCartRouter } from "./routers/foodCart.router";

configDotenv();
const port = 8000;
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use("/", foodRouter);
app.use("./food-cart", foodCartRouter);

// app.post("/discover", async (req: Request, res: Response) => {
//   res.status(200).send();
// });

// app.put("/backEndSecond", async (req: Request, res: Response) => {
//   const user = req.body;

//   const gg = {
//     name: "Mendee",
//     email: "mende_12@gmail.com",
//     password: "123456",
//   };

//   const updateUser = {
//     ...gg,
//     name: user.name,
//     email: user.email,
//     password: user.password,
//   };
//   res.status(200).send(updateUser);
// });

// app.delete("/delete", async (req: Request, res: Response) => {
//   const user2 = req.body;
//   const aa = {
//     name: "Mendee",
//     email: "mende_12@gmail.com",
//     password: "123456",
//   };
//   const deleted = "duus2";
//   res.status(200).send(deleted);
// });

// app.get("/get", async (req: Request, res: Response) => {
//   const user = req.body;
//   const userList = [
//     {
//       id: 1,
//       name: "Mendee",
//       email: "mende_12@gmail.com",
//       password: "123456",
//     },
//     {
//       id: 2,
//       name: "Ochiro",
//       email: "Ochiro@gmail.com",
//       password: "123456",
//     },
//     {
//       id: 3,
//       name: "Turuu",
//       email: "Turuu@gmail.com",
//       password: "123456",
//     },
//     {
//       id: 4,
//       name: "Uchka",
//       email: "Uchka@gmail.com",
//       password: "123456",
//     },
//     {
//       id: 5,
//       name: "Bataa",
//       email: "Bataa@gmail.com",
//       password: "123456",
//     },
//   ];

//   const finder = userList.find((user) => user.id === req.body.id);
//   res.status(200).send(finder);
// });

// app.get("/get", async (req: Request, res: Response) => {
//   const user2 = req.body;
//   const aa = {
//     name: "Mendee",
//     email: "mende_12@gmail.com",
//     password: "123456",
//   };
//   const deleted = "duus2";
//   res.status(200).send(deleted);
// });

// const taskModel = {
//   id: 1,
//   title: "string",
//   description: "string",
//   createdAt: "string",
//   updatedAt: "string",
//   completed: "boolean",
// };
// app.post("/create-user", async (req: Request, res: Response) => {
//   const { name, email } = req.body;
//   const user = await UserModel.create({ name, email });
//   res.status(200).send({ message: `user created successfully`, data: user });
// });

// app.get("/get-users", async (req: Request, res: Response) => {
//   const users = await UserModel.find();
//   res.status(200).send({ message: "users fetched successfully", data: users });
// });

// app.put("/update-user", async (req: Request, res: Response) => {
//   const { email, name, id } = req.body;

//   try {
//     const user = await UserModel.findByIdAndUpdate(
//       id,
//       { email },
//       { new: true },
//     );
//   } catch (error) {
//     console.log(error);
//   }
// });

// app.get("/get-users", async (req: Request, res: Response) => {
//   const users = { UserModel };
//   res.status(200).send({ message: "zahialga", data: users });
// });

app.listen(port, async () => {
  await connectToMongoDB();
  console.log(`Server is running on port ${port}`);
});
