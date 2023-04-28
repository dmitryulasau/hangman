const mongoose = require("mongoose");

const ScoreSchema = new mongoose.Schema(
  {
    score: {
      type: Number,
    },
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Score", TaskSchema);
