import { Request, Response } from "express";
import { FoodModel } from "../../models/food.model";

export const createFoodController = async (req: Request, res: Response) => {
  const { name, ingredients, price, image } = req.body;
  const food = await FoodModel.create({ name, ingredients, price, image });
  res.status(200).send({ message: "Food created succesfully", data: food });
};
