import { Request, Response } from "express";
import { UserModel } from "../../schema/user.schema";

export const createNewUser = async (req: Request, res: Response) => {
  try {
    await UserModel.create();
  } catch (error) {
    console.log(error);
  }
};
