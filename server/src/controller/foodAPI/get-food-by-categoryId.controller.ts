import { Request, Response } from "express";
import { FoodModel } from "../../models/food.model";

export const getFoodCategoryById = async (req: Request, res: Response) => {
  try {
    const { picture, ingredients, name, price } = req.body;
    const foodAPI = await FoodModel.findByIdAndUpdate({
      picture,
      ingredients,
      name,
      price,
    });
    res.status(200).send({ message: "List created", data: foodAPI });
  } catch (error) {
    console.log(error);
    res.status(200).send(error);
  }
};
