import { Request, Response } from "express";
import { FoodCartModel } from "../../schema/foodCart.schema";

export const getFoodCartController = async (req: Request, res: Response) => {
  const foodCart = await FoodCartModel.find().populate("foodId");
  res
    .status(200)
    .send({ message: "Food cart fetched successfully", data: foodCart });
};
