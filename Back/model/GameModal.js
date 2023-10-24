const mongoose = require("mongoose");

const GameModal = mongoose.model("GameModal", {
  name: String,
  price: Number,
});

module.exports = GameModal;
