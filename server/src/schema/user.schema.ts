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
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true },
);

export const UserModel = mongoose.model(`User`, userSchema);
