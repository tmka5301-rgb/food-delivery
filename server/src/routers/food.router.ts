import { Router } from "express";

import { getFoodCategoryById } from "../controller/foodAPI/get-food-by-categoryId.controller";
import { getFoodById } from "../controller/foodAPI/get-food-by-id.controller";
import { createNewFood, deleteFood, updateFood } from "../controller/foodAPI";
import { authentication, authorization } from "../middlewares";

export const foodRouter = Router();

foodRouter.get("/:category", getFoodCategoryById);
foodRouter.get("/", getFoodById);
foodRouter.patch("/:foodId", updateFood);
foodRouter.delete("/:foodId", deleteFood);
foodRouter.post("./:createFood", authentication, authorization, createNewFood);
