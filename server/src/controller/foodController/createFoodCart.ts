import { Request, Response } from "express";
import { FoodCartModel } from "../../schema/foodCart.schema";

export const createFoodCartController = async (req: Request, res: Response) => {
  const { foodId, quantity } = req.body;
  try {
    const foodCart = await FoodCartModel.create({ foodId, quantity });

    res
      .status(200)
      .send({ message: "Food cart created succesfully", data: foodCart });
  } catch (error) {}
};
