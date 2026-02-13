import { Request, Response } from "express";
import { FoodModel, FoodOrderModel } from "../../models";

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { user, OrderItems } = req.body;

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

    const foodAPI = await FoodOrderModel.create({
      user,
      totalPrice: total,
      foodOrderItems: OrderItems,
    });

    res.status(200).send({ message: "Food order created", data: foodAPI });
  } catch (error) {
    console.log(error);
    res.status(200).send(error);
  }
};
