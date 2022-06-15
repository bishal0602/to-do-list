const express = require("express");
const app = express();
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
const TodoSchema = require("./TodoSchema");

app.use(cors());
app.use(express.json());

app.get("/gettodos", async (req, res) => {
  const todos = await TodoSchema.find().sort({ createdAt: -1 });
  res.send(todos);
});

app.post("/createtodo", async (req, res) => {
  await TodoSchema.findOneAndUpdate(
    { todo: req.body.todo },
    { todo: req.body.todo, createdAt: Date.now() },
    { upsert: true }
  );
  res.send("Created Todo!");
});

app.delete("/deletetodo/:id", async (req, res) => {
  await TodoSchema.findOneAndDelete({ _id: req.params.id });
  res.send("Deleted Todo!");
});

app.listen(process.env.PORT || 5000, () => {
  mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => {
      console.log(`Connected to Database!`);
      console.log(`Server running!`);
    })
    .catch((error) => `Database Connection Error: ${error}`);
});
