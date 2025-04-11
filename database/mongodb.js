import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

if (!DB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.<develipment/production>.local file");
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_URI);

    console.log(`Connected to daatabase in ${NODE_ENV} mode`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
}

export default connectToDatabase;