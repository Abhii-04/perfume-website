import mongoose from "mongoose";

const perfumeSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  brand: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: String, enum: ["Men", "Women", "Unisex"], required: true },
  quantityInStock: { type: Number, default: 0 },
  fragranceNotes: {
    top: [String],
    middle: [String],
    base: [String],
  },
  imageUrl: { type: String },
  rating: { type: Number, default: 0 },
  reviewsCount: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Perfume", perfumeSchema);
