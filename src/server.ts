import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/dbConnection";

dotenv.config();
const app = express();

// connect to the mongodb database
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from typescript based nodejs backend");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
