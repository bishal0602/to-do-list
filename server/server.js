const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
  res.send([
    {
      name: "this is my name",
      age: "this is my age",
    },
    {
      name: "this is also my name",
      age: "this is also my age",
    },
  ]);
});

app.listen(process.env.PORT || 5000, () => {
  //   mongoose
  //     .connect(process.env.DB_CONNECT)
  //     .then(() => console.log(`Connected to Database!`))
  //     .catch((error) => `Database Connection Error: ${error}`);
  console.log(`Server running!`);
});
