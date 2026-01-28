import { Request, Response } from "express";
import { UserModel } from "../../models";
import bcrypt from "bcrypt";

export const signUpController = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    const userAPI = await UserModel.create({
      name,
      email,
      password,
    });
    res.status(200).send({ message: "List created", data: userAPI });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "error creating user", error: error });
  }
};
