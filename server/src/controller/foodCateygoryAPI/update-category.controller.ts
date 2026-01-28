import { Request, Response } from "express";
import { FoodCategoryModel } from "../../models";

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const { categoryName } = req.body;
    const categoryAPI = await FoodCategoryModel.findByIdAndUpdate({
      categoryName,
    });

    res.status(200).send({ message: "Category updated", data: categoryAPI });
  } catch (error) {
    console.log(error);
    res.status(200).send(error);
  }
};
