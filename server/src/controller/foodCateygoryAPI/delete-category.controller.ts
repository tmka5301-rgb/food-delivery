import { Request, Response } from "express";
import { FoodCategoryModel } from "../../models";

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const { categoryName } = req.body;
    const categoryAPI = await FoodCategoryModel.findByIdAndDelete({
      categoryName,
    });

    res.status(200).send({ message: "Category deleted", data: categoryAPI });
  } catch (error) {
    console.log(error);
    res.status(200).send(error);
  }
};
