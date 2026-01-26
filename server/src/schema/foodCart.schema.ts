import mongoose, { Schema, models } from "mongoose";

export const foodCartSchema = new Schema({
  foodId: { tupe: Schema.Types.ObjectId, ref: "Food" },
  quantity: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const FoodCartModel =
  models["FoodCart"] || mongoose.model(`User`, foodCartSchema);
