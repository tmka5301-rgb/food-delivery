import { Request, Response } from "express";

export const updateFoodList = async (req: Request, res: Response) => {
  try {
    res.status(200).send(req.params);
  } catch (error) {
    console.log(error);
  }
};
