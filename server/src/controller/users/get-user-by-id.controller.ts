import { Request, Response } from "express";

export const getUserByIdAndPost = async (req: Request, res: Response) => {
  try {
    res.status(200).send(req.params);
  } catch (error) {
    console.log(error);
  }
};
