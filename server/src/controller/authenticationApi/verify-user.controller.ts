import { Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { UserModel } from "../../models";

export const verifyUser = async (req: Request, res: Response) => {
  try {
    const { token } = req.query;

    const verified = jwt.verify(String(token), "SecretToken") as {
      _id: string;
    };

    const verifyMail = await UserModel.findByIdAndUpdate(
      verified._id,
      {
        isVerified: true,
      },
      {
        new: true,
      },
    );

    res.status(200).send({ message: "Success", user: verifyMail });
  } catch (error) {
    res.status(404).send({ message: "User not Found" });
  }
};