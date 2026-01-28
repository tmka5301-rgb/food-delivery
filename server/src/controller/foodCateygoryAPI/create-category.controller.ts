import { Request, Response } from "express";
import { FoodCategoryModel } from "../../models";

export const createCategory = async (req: Request, res: Response) => {
  try {
    const { categoryName } = req.body;
    const bn = await FoodCategoryModel.findOne({ categoryName });
    if (bn) {
      return res
        .status(400)
        .send({ message: "iim category bnaa!! neegdehgui" });
    }

    const categoryAPI = await FoodCategoryModel.create({ categoryName });

    res.status(200).send({ message: "Category created", data: categoryAPI });
  } catch (error) {
    console.log(error);
    res.status(200).send(error);
  }
};
