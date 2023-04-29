const mongoose = require("mongoose");

const ScoreSchema = new mongoose.Schema(
  {
    score: {
      type: Number,
      default: 0,
    },
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Score", ScoreSchema);
