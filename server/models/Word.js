const mongoose = require("mongoose");

const WordSchema = new mongoose.Schema(
  {
    word: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Word", WordSchema);
