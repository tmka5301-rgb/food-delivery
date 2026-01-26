import { ObjectId } from "mongodb";
import { model, models, Schema } from "mongoose";

type User = {
  _id: ObjectId;
  name: string;
  phoneNumber: string;
};

export const UserSchema = new Schema<User>({
  name: { tupe: String, required: true },
  phoneNumber: { type: String, required: true },
});

export const UserModel = models["Users"] || model("Users", UserSchema);
