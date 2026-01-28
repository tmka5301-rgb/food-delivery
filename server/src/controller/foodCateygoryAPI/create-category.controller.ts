import { Request, Response } from "express";
import { FoodCategoryModel } from "../../models";

export const createCategory = async (req: Request, res: Response) => {
  try {
    const { categoryName } = req.body;
    const categoryAPI = await FoodCategoryModel.create({ categoryName });

    res.status(200).send({ message: "Category created", data: categoryAPI });
  } catch (error) {
    console.log(error);
    res.status(200).send(error);
  }
};
