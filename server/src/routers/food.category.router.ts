import { Router } from "express";
import { updateCategory } from "../controller/foodCateygoryAPI/update-category.controller";
import { createCategory } from "../controller/foodCateygoryAPI/create-category.controller";
import { deleteCategory } from "../controller/foodCateygoryAPI/delete-category.controller";
import { getCategory } from "../controller/foodCateygoryAPI/get-category.controller";

export const foodCategoryRouter = Router();

foodCategoryRouter.get("/", getCategory);
foodCategoryRouter.post("/", createCategory);
foodCategoryRouter.patch("/:foodCategoryId", updateCategory);
foodCategoryRouter.delete("/:foodCategoryId", deleteCategory);
