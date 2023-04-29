const router = require("express").Router();
const Word = require("../models/Word");

router.post("/add", async (req, res) => {
  const newWord = new Word(req.body);
  try {
    const savedWord = await newWord.save();
    res.status(200).json(savedWord);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET WORD
router.get("/:id", async (req, res) => {
  try {
    const word = await Word.findById(req.params.id);
    res.status(200).json(word);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
