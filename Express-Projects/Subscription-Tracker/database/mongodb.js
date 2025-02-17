import mongoose from "mongoose";

import { DB_URI, NODE_ENV } from "../config/env.js";

if (!DB_URI) {
  throw new Error(
    "Please define the DB_URI environment variable inside .env.{}.local"
  );
}

const connectToDB = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log(`\nDB Connected in ${NODE_ENV} mode ~~\n`);
  } catch (error) {
    console.error("\nError Connecting to DB ~~\n");
    process.exit(1);
  }
};

export default connectToDB;
