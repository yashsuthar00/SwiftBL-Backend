import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI as string);
    console.log(
      "MongoDB connected: ",
      conn.connection.host,
      conn.connection.name,
    );
  } catch (err) {
    console.error(`Error: ${(err as Error).message}`);
    process.exit(1);
  }
};

export default connectDB;
