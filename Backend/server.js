import "dotenv/config";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Sucess from Api",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`);
});
