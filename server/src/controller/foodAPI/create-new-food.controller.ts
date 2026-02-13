import { Request, Response } from "express";
import { FoodModel } from "../../models/food.model";

export const createNewFood = async (req: Request, res: Response) => {
  try {
    const { foodName, price, image, ingredients, category } = req.body;
    const foodAPI = await FoodModel.create({
      foodName,
      price,
      image,
      ingredients,
      category,
    });
    res.status(200).send({ message: "New food created", data: foodAPI });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
