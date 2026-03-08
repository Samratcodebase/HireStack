import mongoose from "mongoose";
import ENV from "./env.js";

const ConnectDB = async () => {
  try {
    const conn = await mongoose.connect(ENV.DB_URI);
    console.log(`Database Connected : ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error Connecting to DB ${error}`);
    process.exit(1);
    //0 - Success
    //1 - Failure
  }
};

export default ConnectDB;
