import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  sourcing: Array,
  orderCreation: Array,
  trims: Array,
}, { timestamps: true });

export default mongoose.model("Order", OrderSchema);
