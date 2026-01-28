import { Router } from "express";
import { signInController } from "../controller/authenticationApi/sign-in.controller";
import { signUpController } from "../controller/authenticationApi/sign-up.controller";

export const authenticationRouter = Router();

authenticationRouter.get("/refresh");
authenticationRouter.post("/sign-in", signInController);
authenticationRouter.post("/sign-up", signUpController);
authenticationRouter.post("/reset-password-request");
authenticationRouter.get("/verify-reset-password-request");
authenticationRouter.post("/reset-password");
