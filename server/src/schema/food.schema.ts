import mongoose, { Schema, model } from "mongoose";

type User = {
  picture: string;
  name: string;
  ingredient: string;
  email: string;
  phoneNumber: string;
  price: string;
};

const userSchema = new Schema<User>(
  {
    picture: { type: String, required: true },
    name: { type: String, required: true },
    ingredient: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    price: { type: String, required: true, unique: true },
  },
  { timestamps: true },
);

export const UserModel = mongoose.model(`User`, userSchema);
