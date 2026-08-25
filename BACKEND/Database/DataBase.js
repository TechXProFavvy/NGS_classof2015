import mongoose from "mongoose";
import { app, PORT } from "../App.js";
import dotEnv from "dotenv";
import dns from "dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);
dotEnv.config();
const MONGO_URI = process.env.MONGO_URI;

const dbconnection = async () => {
  try {
    let conn = await mongoose.connect(MONGO_URI);

    console.log(`connected to mongodb!`);

    app.listen(PORT, () => {
      console.log(`Listening on PORT ${PORT}`);
    });
  } catch (err) {
    console.error(`connection Failed: ${err}`);
    process.exit(1);
  }
};
dbconnection();
export default dbconnection;
