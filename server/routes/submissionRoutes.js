const express = require("express");
const Submission = require("../models/Submission");

const router = express.Router();

// Create a new submission
router.post("/", async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      technology,
      githubLink,
      userId,
    } = req.body;

    const submission = new Submission({
      title,
      description,
      category,
      technology,
      githubLink,
      userId,
    });

    await submission.save();

    res.status(201).json({
      message: "Submission created successfully",
      submission,
    });
  } catch (error) {
    console.log("Submission error:", error.message);

    res.status(500).json({
      message: "Failed to create submission",
    });
  }
});

// Get ALL submissions
router.get("/", async (req, res) => {
  try {
    const submissions = await Submission.find()
      .sort({ createdAt: -1 });

    res.status(200).json(submissions);
  } catch (error) {
    console.log("Fetch all submissions error:", error.message);

    res.status(500).json({
      message: "Failed to fetch submissions",
    });
  }
});

// Get submissions of a particular user
router.get("/:userId", async (req, res) => {
  try {
    const submissions = await Submission.find({
      userId: req.params.userId,
    }).sort({ createdAt: -1 });

    res.status(200).json(submissions);
  } catch (error) {
    console.log("Fetch submissions error:", error.message);

    res.status(500).json({
      message: "Failed to fetch submissions",
    });
  }
});

module.exports = router;