import { Request, Response } from "express";
import { UserModel } from "../../models";
import jwt from "jsonwebtoken";

export const signInController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const userAPI = await UserModel.findOne({ email });

    if (!userAPI) return res.status(404).send({ message: "user not found" });

    if (userAPI.password !== password)
      return res.status(401).send({ message: "Email or Password boldguee" });

    const tokenSignIn = jwt.sign({ _id: userAPI._id }, "SecretToken", {
      expiresIn: "1h",
    });

    res
      .status(200)
      .send({ message: "User signed in successfully", userAPI, tokenSignIn });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "error signing in", error: error });
  }
};
