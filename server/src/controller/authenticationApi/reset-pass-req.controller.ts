import { Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { UserModel } from "../../models";
import { OTPModel } from "../../models/otp.model";
import { passChangeReq } from "../../utils/reset-password-req";
import otpGenerator from "otp-generator";

export const resetPasswordRequest = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).send({ message: "Hereglegch oldsongui" });
    }

    const newToken = jwt.sign(
      { _id: user._id },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "1d",
      },
    );

    const otp = otpGenerator.generate(6, {
      digits: true,
      lowerCaseAlphabets: false,
      upperCaseAlphabets: false,
      specialChars: false,
    });
    await OTPModel.create({
      userId: user._id,
      otp,
    });
    await passChangeReq(
      email,
      `${process.env.BACKEND_API}/auth/reset-password-req?token=${newToken}`,
      otp,
    );

    res
      .status(200)
      .redirect(`http://localhost:3000/verify-otp?token=${newToken}`);
  } catch (error) {
    res.status(500).send({ message: "cannot reset password", error: error });
  }
};
