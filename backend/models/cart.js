import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [
    {
      perfume: { type: mongoose.Schema.Types.ObjectId, ref: "Perfume" },
      quantity: { type: Number, default: 1 },
    },
  ],
  totalPrice: { type: Number, default: 0 },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Cart", cartSchema);
