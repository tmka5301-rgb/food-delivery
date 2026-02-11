import { Router } from "express";
import { signInController } from "../controller/authenticationApi/sign-in.controller";
import { signUpController } from "../controller/authenticationApi/sign-up.controller";
import {
  resetPasswordRequest,
  verifyUser,
} from "../controller/authenticationApi";

export const authenticationRouter = Router();

// authenticationRouter.get("/refresh");
authenticationRouter.post("/sign-in", signInController);
authenticationRouter.post("/sign-up", signUpController);
authenticationRouter.get("/user-verify", verifyUser);
authenticationRouter.post("/reset-pass-req", resetPasswordRequest);
// authenticationRouter.get("/verify-reset-password-request");
// authenticationRouter.post("/reset-password");
