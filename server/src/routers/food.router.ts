import { Router } from "express";
import { createNewFood, deleteFood, updateFoodList } from "../controller/foods";

export const foodRouter = Router();

foodRouter.post("/create-new-food", createNewFood);
foodRouter.delete("/food-by-id", deleteFood);
foodRouter.put("./update-food", updateFoodList);
