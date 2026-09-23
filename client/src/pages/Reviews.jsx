import { useState } from "react";

function Reviews() {
  const [reviews, setReviews] = useState({});

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      author: "Arun",
      technology: "HTML, CSS, JavaScript",
    },
    {
      id: 2,
      title: "Weather Forecast App",
      author: "Priya",
      technology: "JavaScript, API",
    },
    {
      id: 3,
      title: "Student Management System",
      author: "Rahul",
      technology: "React, Node.js, MongoDB",
    },
  ];

  const handleRating = (projectId, rating) => {
    setReviews({
      ...reviews,
      [projectId]: {
        ...reviews[projectId],
        rating,
      },
    });
  };

  const handleFeedback = (projectId, feedback) => {
    setReviews({
      ...reviews,
      [projectId]: {
        ...reviews[projectId],
        feedback,
      },
    });
  };

  const submitReview = (projectId) => {
    const review = reviews[projectId];

    if (!review?.rating || !review?.feedback) {
      alert("Please provide a rating and feedback.");
      return;
    }

    alert("Review submitted successfully!");

    console.log("Review:", {
      projectId,
      rating: review.rating,
      feedback: review.feedback,
    });
  };

  return (
    <div className="reviews-page">

      <nav className="dashboard-nav">
        <div className="logo">PeerReview</div>

        <div className="dashboard-user">
          <span>Welcome, Student 👋</span>
          <div className="profile-circle">S</div>
        </div>
      </nav>

      <main className="reviews-content">

        <div className="reviews-heading">
          <p className="tagline">PEER FEEDBACK</p>

          <h1>Give Reviews</h1>

          <p>
            Review other students' projects and help them improve.
          </p>
        </div>

        <div className="review-list">

          {projects.map((project) => (

            <div className="review-card" key={project.id}>

              <div className="review-project-info">

                <div>
                  <h2>{project.title}</h2>

                  <p>
                    By {project.author} • {project.technology}
                  </p>
                </div>

                <span className="review-status">
                  Awaiting Review
                </span>

              </div>

              <div className="rating-section">

                <label>Rate this project</label>

                <div className="rating-buttons">

                  {[1, 2, 3, 4, 5].map((number) => (

                    <button
                      key={number}
                      className={
                        reviews[project.id]?.rating === number
                          ? "rating-button selected"
                          : "rating-button"
                      }
                      onClick={() =>
                        handleRating(project.id, number)
                      }
                    >
                      {number} ⭐
                    </button>

                  ))}

                </div>

              </div>

              <div className="feedback-section">

                <label>Your Feedback</label>

                <textarea
                  placeholder="What did you like? What could be improved?"
                  value={reviews[project.id]?.feedback || ""}
                  onChange={(e) =>
                    handleFeedback(project.id, e.target.value)
                  }
                />

              </div>

              <button
                className="primary-btn review-submit"
                onClick={() => submitReview(project.id)}
              >
                Submit Review
              </button>

            </div>

          ))}

        </div>

      </main>

    </div>
  );
}

export default Reviews;