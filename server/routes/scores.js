const router = require("express").Router();
const Score = require("../models/Score");

// CREATE SCORE
router.post("/", async (req, res) => {
  const newScore = new Score(req.body);
  try {
    const savedScore = await newScore.save();
    res.status(200).json(savedScore);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE SCORE
router.put("/:id", async (req, res) => {
  try {
    const score = await Score.findById(req.params.id);
    if (score.username === req.body.username) {
      try {
        const updatedScore = await Score.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedScore);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your SCORE!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET TASK
router.get("/:id", async (req, res) => {
  try {
    const score = await Score.findById(req.params.id);
    res.status(200).json(score);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
