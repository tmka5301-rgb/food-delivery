import { Request, Response } from "express";
import { FoodCategoryModel, FoodModel, FoodOrderModel } from "../../models";

export const updateFoodOrder = async (req: Request, res: Response) => {
  try {
    const { orderId, OrderItems } = req.body;

    const allFoods = Promise.all(
      OrderItems.map(
        async ({ food, quantity }: { food: String; quantity: String }) => {
          const foundFood = await FoodModel.findById(food);

          return Number(foundFood?.price) * Number(quantity);
        },
      ),
    );
    const result = await allFoods;
    const total = result.reduce((acc, item) => acc + item, 0);

    const updeteOrder = await FoodOrderModel.findByIdAndUpdate(orderId, {
      foodOrderItems: OrderItems,
      totalPrice: total,
    });

    res.status(200).send({ message: "Food order updated", data: updeteOrder });
  } catch (error) {
    console.log(error);
    res.status(200).send(error);
  }
};
