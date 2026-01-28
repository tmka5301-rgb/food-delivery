import mongoose, { models, ObjectId, Schema } from "mongoose";

enum FoodOrderStatus {
  PENDING = "PENDING",
  CANCELED = "CANCELED",
  DELIVERED = "DELIVERED",
}

type FoodOrderType = {
  user: ObjectId;
  totalPrice: number;
  foodOrderItems: [];
  status: FoodOrderStatus;
};

const FoodOrderItem = new Schema(
  {
    food: { type: Schema.Types.ObjectId, ref: "Food", required: true },
    quantity: { types: Number, required: true },
  },
  { _id: false },
);

export const FoodOrderSchema = new Schema<FoodOrderType>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    totalPrice: { types: Number, required: true },
    foodOrderItems: [{ type: FoodOrderItem, required: true }],
    status: {
      type: String,
      enum: Object.values(FoodOrderStatus),
      default: FoodOrderStatus.PENDING,
      required: true,
    },
  },
  { timestamps: true },
);
export const FoodOrderModel =
  models["FoodOrder"] || mongoose.model("FoodOrder", FoodOrderSchema);
