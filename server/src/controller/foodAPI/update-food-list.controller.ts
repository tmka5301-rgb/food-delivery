import { Request, Response } from "express";
import { FoodModel } from "../../models/food.model";

export const updateFood = async (req: Request, res: Response) => {
  try {
    const { picture, ingredients, name, price } = req.body;
    const foodAPI = await FoodModel.findOneAndUpdate({
      picture,
      ingredients,
      name,
      price,
    });
    res.status(200).send({ message: "Food list updated", data: foodAPI });
  } catch (error) {
    console.log(error);
    res.status(200).send(error);
  }
};
