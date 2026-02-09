import { Request, Response } from "express";
import { UserModel } from "../../models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { verifyUserEmail } from "../../utils/mail-utils";

export const signUpController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, phoneNumber } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    const userAPI = await UserModel.create({
      name,
      email,
      password: hashedPassword,
      phoneNumber,
    });

    const token = jwt.sign({ _id: userAPI._id }, "SecretToken", {
      expiresIn: "1h",
    });
    await verifyUserEmail(
      email,
      `${process.env.BACKEND_API}/auth/user-verify?token=${token}`,
    );

    res
      .status(200)
      .send({ message: "user created successfully", userAPI, token });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "error creating user", error: error });
  }
};
