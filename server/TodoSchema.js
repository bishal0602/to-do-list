const mongoose = require("mongoose");
const { Schema } = mongoose;

const TodoSchema = new Schema({
  todo: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Todos", TodoSchema);
