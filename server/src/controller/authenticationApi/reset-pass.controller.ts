import { Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../../models";
import { error } from "node:console";

export const newPassword = async (req: Request, res: Response) => {
  try {
    const { token } = req.headers;
    const { password } = req.body;
    const hashed = await bcrypt.hash(password, 10);

    const decoded = jwt.decode(String(token)) as JwtPayload;
    const { email } = decoded;

    const updateUser = await UserModel.findByIdAndUpdate(
      { email },
      { password: hashed },
      { new: true },
    );
    res.status(200).send({ message: "Success", updateUser });
  } catch {
    console.log(error);
    res.status(500).send({ message: "Error", error: error });
  }
};
