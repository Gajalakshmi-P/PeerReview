import { useState } from "react";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Submissions from "./pages/Submissions";
import Reviews from "./pages/Reviews";

function App() {
  const [page, setPage] = useState("home");

  // LOGIN PAGE
  if (page === "login") {
    return (
      <Login
        goToRegister={() => setPage("register")}
        goToDashboard={() => setPage("dashboard")}
      />
    );
  }

  // REGISTER PAGE
  if (page === "register") {
    return (
      <Register
        goToLogin={() => setPage("login")}
      />
    );
  }

  // DASHBOARD
  if (page === "dashboard") {
    return (
      <Dashboard
        goToSubmissions={() => setPage("submissions")}
        goToReviews={() => setPage("reviews")}
        goToHome={() => setPage("home")}
      />
    );
  }

  // SUBMISSIONS
  if (page === "submissions") {
    return (
      <Submissions
        goToDashboard={() => setPage("dashboard")}
        goToReviews={() => setPage("reviews")}
      />
    );
  }

  // REVIEWS
  if (page === "reviews") {
    return (
      <Reviews
        goToDashboard={() => setPage("dashboard")}
        goToSubmissions={() => setPage("submissions")}
      />
    );
  }

  // LANDING PAGE
  return (
    <div className="app">

      <nav className="navbar">

        <div className="logo">
          PeerReview
        </div>

        <div className="nav-links">

          <a href="#home">
            Home
          </a>

          <a href="#features">
            Features
          </a>

          <button
            className="login-btn"
            onClick={() => setPage("login")}
          >
            Login
          </button>

          <button
            className="signup-btn"
            onClick={() => setPage("register")}
          >
            Get Started
          </button>

        </div>

      </nav>


      <section className="hero" id="home">

        <div className="hero-content">

          <p className="tagline">
            LEARN • REVIEW • IMPROVE
          </p>

          <h1>
            Better projects begin
            <br />
            with better feedback.
          </h1>

          <p>
            PeerReview helps students share their projects,
            exchange meaningful feedback, and improve their
            skills together.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={() => setPage("register")}
            >
              Start Reviewing
            </button>

            <button
              className="secondary-btn"
              onClick={() => setPage("login")}
            >
              Explore Projects
            </button>

          </div>

        </div>


        <div className="hero-card">

          <div className="review-card-top">
            <span>Peer Feedback</span>
            <span>⭐⭐⭐⭐⭐</span>
          </div>

          <h3>
            Portfolio Website
          </h3>

          <p>
            "Clean structure and a good user interface.
            The project is easy to navigate."
          </p>

          <div className="reviewer">
            <div className="reviewer-circle">
              A
            </div>

            <div>
              <strong>
                Anonymous Peer
              </strong>

              <small>
                Student Reviewer
              </small>
            </div>
          </div>

        </div>

      </section>


      <section
        className="features"
        id="features"
      >

        <p className="tagline">
          WHY PEERREVIEW?
        </p>

        <h2>
          Build. Share. Improve.
        </h2>

        <div className="feature-grid">

          <div className="feature-card">

            <div className="feature-icon">
              📤
            </div>

            <h3>
              Share Your Work
            </h3>

            <p>
              Upload your projects and let your peers
              discover what you have built.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              💬
            </div>

            <h3>
              Give Reviews
            </h3>

            <p>
              Provide constructive feedback and help
              other students improve their projects.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              📈
            </div>

            <h3>
              Track Improvement
            </h3>

            <p>
              See ratings and feedback to understand
              how your projects can become better.
            </p>

          </div>

        </div>

      </section>


      <footer>
        © 2026 PeerReview • Learn together. Build better.
      </footer>

    </div>
  );
}

export default App;