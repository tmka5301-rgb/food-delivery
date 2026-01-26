import { Router } from "express";
import {
  createNewUser,
  //   getUserId,
} from "../controller/users";

export const userRouter = Router();

userRouter.post("/create-user", createNewUser);

userRouter.get("/user-by-id", createNewUser);
userRouter.delete("/user-by-id", createNewUser);

// userRouter.get("/user-by-id", getUserId);
// userRouter.put("/user-by-id", getUserId);
// userRouter.delete("/user-by-id", getUserId);
//   getUserId,
