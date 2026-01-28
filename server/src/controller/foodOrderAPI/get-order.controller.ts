import { Request, Response } from "express";
import { FoodCategoryModel, FoodOrderModel } from "../../models";

export const getOrder = async (req: Request, res: Response) => {
  try {
    const { user, totalPrice, foodOrderItems, status } = req.body;
    const foodOrderAPI = await FoodOrderModel.findOneAndUpdate({
      user,
      totalPrice,
      foodOrderItems,
      status,
    });

    res.status(200).send({ message: "Food order updated", data: foodOrderAPI });
  } catch (error) {
    console.log(error);
    res.status(200).send(error);
  }
};
