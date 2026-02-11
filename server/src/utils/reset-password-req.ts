import nodemailer from "nodemailer";
import { configDotenv } from "dotenv";
import { Resend } from "resend";

configDotenv();

// const { AUTH_EMAIL, AUTH_PASS } = process.env;

// const transport = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: AUTH_EMAIL,
//     pass: AUTH_PASS,
//   },
// });

const resend = new Resend(process.env.RESEND_API_KEY);

export const passChangeReq = async (
  receiver: string,
  passResetLink: string,
  otp: string,
) => {
  console.log(receiver, passResetLink, otp);

  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: receiver,
    subject: "Forgot password",
    html: `<div
    style="
      width: 200px;
      height: 200px;
      border-radius: 8px;
      background-color: aqua;
    "
  >
   <a href="${passResetLink}" style="font-size: 18px; color: red">Verify user</a>
  </div>
  `,
    replyTo: "onboarding@resend.dev",
  });
  console.log(data, error);
};
