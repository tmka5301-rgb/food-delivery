import { Router } from "express";
import { updateOrder } from "../controller/foodOrderAPI/update-order.controller";
import { createOrder } from "../controller/foodOrderAPI/create-order.controller";
import { getOrderById } from "../controller/foodOrderAPI/get-order-byUserId.controller";
import { getOrder } from "../controller/foodOrderAPI/get-order.controller";

export const foodOrderRouter = Router();

foodOrderRouter.post("/", createOrder);
foodOrderRouter.get("/", getOrder);
foodOrderRouter.get("/:userId", getOrderById);
foodOrderRouter.patch("/:foodOrderId", updateOrder);
