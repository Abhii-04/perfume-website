import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [
    {
      perfume: { type: mongoose.Schema.Types.ObjectId, ref: "Perfume" },
      quantity: Number,
      price: Number,
    },
  ],
  totalAmount: { type: Number, required: true },
  shippingAddress: {
    street: String,
    city: String,
    postalCode: String,
    country: String,
  },
  paymentStatus: { type: String, enum: ["Pending", "Paid"], default: "Pending" },
  orderStatus: {
    type: String,
    enum: ["Processing", "Shipped", "Delivered", "Cancelled"],
    default: "Processing",
  },
  orderedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Order", orderSchema);
