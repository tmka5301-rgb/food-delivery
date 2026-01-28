import { Request, Response } from "express";
import { UserModel } from "../../models";

export const signInController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const userAPI = await UserModel.create({ email });
    if (!userAPI) return res.status(404).send({ message: "user not found" });
    if (userAPI.password !== password)
      return res.status(401).send({ message: "invalid password" });

    res
      .status(200)
      .send({ message: "User signed in successfully", data: userAPI });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "error signing in", error: error });
  }
};
