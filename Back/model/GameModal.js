const mongoose = require("mongoose");

const GameModal = mongoose.model("GameModal", {
  name: String,
  price: Number,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = GameModal;
