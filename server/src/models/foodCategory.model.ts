import mongoose, { models, ObjectId, Schema } from "mongoose";

type FoodCategoryType = {
  categoryName: string;
};

export const FoodCategorySchema = new Schema<FoodCategoryType>(
  {
    categoryName: { type: String, required: true },
  },
  { timestamps: true },
);
export const FoodCategoryModel =
  models["FoodCategory"] || mongoose.model("FoodCategory", FoodCategorySchema);
