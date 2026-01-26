import { model, models, Schema } from "mongoose";

type Food = {
  picture: string;
  ingredients: string;
  name: string;
  price: string;
};

export const FoodSchema = new Schema<Food>(
  {
    picture: { type: String, required: true },
    ingredients: [{ type: String, required: true }],
    name: { type: String, required: true, unique: true },
    price: { type: String, required: true },
  },
  { timestamps: true },
);

export const FoodModel = models["Food"] || model("Food", FoodSchema);
