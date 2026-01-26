import { Request, Response } from "express";
import { UserModel } from "../../schema/user.schema";

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const deleteFood = await UserModel.create();
  } catch (error) {
    console.log(error);
  }
};
