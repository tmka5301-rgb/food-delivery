import { Router } from "express";

export const authenticationRouter = Router();

authenticationRouter.get("/refresh");
authenticationRouter.post("/sign-in");
authenticationRouter.post("/sign-up");
authenticationRouter.post("/reset-password-request");
authenticationRouter.get("/verify-reset-password-request");
authenticationRouter.post("/reset-password");
