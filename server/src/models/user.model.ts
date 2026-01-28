import { model, models, ObjectId, Schema } from "mongoose";

enum UserRole {
  USER = "USER",
  ADMIN = "ADMIN",
}

type User = {
  _id: ObjectId;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  role: UserRole;
  orderedFoods: ObjectId;
  ttl: Date;
  isVerified: boolean;
};

export const UserSchema = new Schema<User>(
  {
    _id: { type: Schema.Types.ObjectId, ref: "User", required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    role: {
      type: String,
      enum: Object.values(UserRole),
      default: UserRole.USER,
      required: true,
    },
    orderedFoods: { type: Schema.Types.ObjectId, ref: "Food", required: true },
    ttl: { type: Date, required: true },
    isVerified: { type: Boolean, default: false, required: true },
  },
  { timestamps: true },
);

export const UserModel = models["Users"] || model("Users", UserSchema);
