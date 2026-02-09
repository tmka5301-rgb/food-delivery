import { Request, Response } from "express";
import { UserModel } from "../../models";

export const resetPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    const resetPass = await UserModel.findOne({ email });

    // await resetPassword({ email });

    res.status(200).send({ message: "" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "", error: error });
  }
};
