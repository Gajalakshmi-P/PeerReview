import { useEffect, useState } from "react";

function Dashboard({
  goToSubmissions,
  goToReviews,
  goToHome,
}) {
  const [submissionCount, setSubmissionCount] = useState(0);
  const [reviewsGiven, setReviewsGiven] = useState(0);
  const [reviewsReceived, setReviewsReceived] = useState(0);
  const [pendingReviews, setPendingReviews] = useState(0);

  const [loading, setLoading] = useState(true);

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  useEffect(() => {
    const fetchDashboardData = async () => {
      if (!user) {
        setLoading(false);
        return;
      }

      try {
        // Get user's submissions
        const submissionsResponse = await fetch(
          `http://localhost:5000/api/submissions/${user.id}`
        );

        const submissions =
          await submissionsResponse.json();

        if (!submissionsResponse.ok) {
          throw new Error(
            submissions.message ||
              "Failed to fetch submissions"
          );
        }

        setSubmissionCount(submissions.length);

        // Count pending submissions
        const pending = submissions.filter(
          (submission) =>
            submission.status === "Pending"
        );

        setPendingReviews(pending.length);

        // Get reviews written by user
        const givenResponse = await fetch(
          `http://localhost:5000/api/reviews/${user.id}`
        );

        const givenReviews =
          await givenResponse.json();

        if (!givenResponse.ok) {
          throw new Error(
            givenReviews.message ||
              "Failed to fetch reviews"
          );
        }

        setReviewsGiven(givenReviews.length);

        // Get reviews received
        const receivedResponse = await fetch(
          `http://localhost:5000/api/reviews/received/${user.id}`
        );

        const receivedReviews =
          await receivedResponse.json();

        if (!receivedResponse.ok) {
          throw new Error(
            receivedReviews.message ||
              "Failed to fetch received reviews"
          );
        }

        setReviewsReceived(
          receivedReviews.length
        );
      } catch (error) {
        console.log(
          "Dashboard error:",
          error.message
        );
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");

    alert("Logged out successfully!");

    goToHome();
  };

  return (
    <div className="dashboard-page">

      {/* Navbar */}
      <nav className="dashboard-nav">

        <div className="logo">
          PeerReview
        </div>

        <div className="dashboard-user">

          <span>
            Welcome,{" "}
            {user ? user.name : "Student"} 👋
          </span>

          <div className="profile-circle">
            {user
              ? user.name
                  .charAt(0)
                  .toUpperCase()
              : "S"}
          </div>

          <button
            onClick={handleLogout}
            className="logout-btn"
          >
            Logout
          </button>

        </div>

      </nav>

      {/* Main Content */}
      <main className="dashboard-content">

        {/* Heading */}
        <div className="dashboard-heading">

          <div>

            <p className="tagline">
              STUDENT DASHBOARD
            </p>

            <h1>
              Welcome back,{" "}
              {user ? user.name : "Student"}!
            </h1>

            <p>
              Track your projects, reviews,
              and peer feedback in one place.
            </p>

          </div>

        </div>

        {/* Statistics */}
        <div className="stats-grid">

          {/* Projects */}
          <div className="stat-card">

            <div className="stat-icon">
              📁
            </div>

            <div>
              <p>
                Projects Submitted
              </p>

              <h2>
                {loading
                  ? "..."
                  : submissionCount}
              </h2>
            </div>

          </div>

          {/* Reviews Given */}
          <div className="stat-card">

            <div className="stat-icon">
              ✍️
            </div>

            <div>
              <p>
                Reviews Given
              </p>

              <h2>
                {loading
                  ? "..."
                  : reviewsGiven}
              </h2>
            </div>

          </div>

          {/* Reviews Received */}
          <div className="stat-card">

            <div className="stat-icon">
              ⭐
            </div>

            <div>
              <p>
                Reviews Received
              </p>

              <h2>
                {loading
                  ? "..."
                  : reviewsReceived}
              </h2>
            </div>

          </div>

          {/* Pending */}
          <div className="stat-card">

            <div className="stat-icon">
              ⏳
            </div>

            <div>
              <p>
                Pending Reviews
              </p>

              <h2>
                {loading
                  ? "..."
                  : pendingReviews}
              </h2>
            </div>

          </div>

        </div>

        {/* Action Cards */}
        <div className="dashboard-actions">

          {/* Submit */}
          <div className="action-card">

            <div className="action-icon">
              🚀
            </div>

            <h2>
              Submit a Project
            </h2>

            <p>
              Share your project and
              receive constructive
              feedback from your peers.
            </p>

            <button
              onClick={goToSubmissions}
              className="primary-btn"
            >
              Submit Project →
            </button>

          </div>

          {/* Review */}
          <div className="action-card">

            <div className="action-icon">
              💬
            </div>

            <h2>
              Review a Project
            </h2>

            <p>
              Explore projects from
              other students and share
              useful feedback.
            </p>

            <button
              onClick={goToReviews}
              className="primary-btn"
            >
              Start Reviewing →
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;