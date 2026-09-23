const express = require("express");
const Review = require("../models/Review");
const Submission = require("../models/Submission");

const router = express.Router();

// Create a review
router.post("/", async (req, res) => {
  try {
    const {
      submissionId,
      reviewerId,
      rating,
      feedback,
    } = req.body;

    const review = new Review({
      submissionId,
      reviewerId,
      rating,
      feedback,
    });

    await review.save();

    // Update submission status
    await Submission.findByIdAndUpdate(
      submissionId,
      { status: "Reviewed" }
    );

    res.status(201).json({
      message: "Review submitted successfully",
      review,
    });
  } catch (error) {
    console.log("Review error:", error.message);

    res.status(500).json({
      message: "Failed to submit review",
    });
  }
});

// Get reviews received on a user's submissions
router.get("/received/:userId", async (req, res) => {
  try {
    const submissions = await Submission.find({
      userId: req.params.userId,
    });

    const submissionIds = submissions.map(
      (submission) => submission._id
    );

    const reviews = await Review.find({
      submissionId: { $in: submissionIds },
    })
      .populate("submissionId")
      .sort({ createdAt: -1 });

    res.status(200).json(reviews);
  } catch (error) {
    console.log(
      "Fetch received reviews error:",
      error.message
    );

    res.status(500).json({
      message: "Failed to fetch received reviews",
    });
  }
});

// Get reviews written by a particular reviewer
router.get("/:reviewerId", async (req, res) => {
  try {
    const reviews = await Review.find({
      reviewerId: req.params.reviewerId,
    })
      .populate("submissionId")
      .sort({ createdAt: -1 });

    res.status(200).json(reviews);
  } catch (error) {
    console.log(
      "Fetch reviews error:",
      error.message
    );

    res.status(500).json({
      message: "Failed to fetch reviews",
    });
  }
});

module.exports = router;