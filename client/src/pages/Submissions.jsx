import { useState } from "react";

function Submissions() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [technology, setTechnology] = useState("");
  const [githubLink, setGithubLink] = useState("");

  const [submissions, setSubmissions] = useState([
    {
      title: "Portfolio Website",
      category: "Web Development",
      technology: "HTML, CSS, JavaScript",
      status: "Reviewed",
    },
    {
      title: "Weather App",
      category: "Web Development",
      technology: "JavaScript",
      status: "Pending",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSubmission = {
      title,
      category,
      technology,
      status: "Pending",
    };

    setSubmissions([...submissions, newSubmission]);

    setTitle("");
    setDescription("");
    setCategory("");
    setTechnology("");
    setGithubLink("");

    alert("Submission added successfully!");
  };

  return (
    <div className="submission-page">

      <nav className="dashboard-nav">
        <div className="logo">PeerReview</div>

        <div className="dashboard-user">
          <span>Welcome, Student 👋</span>
          <div className="profile-circle">S</div>
        </div>
      </nav>

      <main className="submission-content">

        <div className="submission-heading">
          <div>
            <p className="tagline">MY PROJECTS</p>
            <h1>My Submissions</h1>
            <p>
              Share your projects and receive valuable feedback from peers.
            </p>
          </div>
        </div>

        <div className="submission-layout">

          {/* FORM */}

          <section className="submission-form-card">

            <h2>Submit a Project</h2>

            <p className="form-description">
              Add your project details so other students can review it.
            </p>

            <form onSubmit={handleSubmit}>

              <label>Project Title</label>

              <input
                type="text"
                placeholder="Example: Portfolio Website"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />

              <label>Description</label>

              <textarea
                placeholder="Describe your project..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />

              <label>Category</label>

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="">Select category</option>
                <option value="Web Development">Web Development</option>
                <option value="Mobile Development">Mobile Development</option>
                <option value="Data Science">Data Science</option>
                <option value="Other">Other</option>
              </select>

              <label>Technology</label>

              <input
                type="text"
                placeholder="Example: React, Node.js, MongoDB"
                value={technology}
                onChange={(e) => setTechnology(e.target.value)}
                required
              />

              <label>GitHub Link</label>

              <input
                type="url"
                placeholder="https://github.com/..."
                value={githubLink}
                onChange={(e) => setGithubLink(e.target.value)}
                required
              />

              <button type="submit" className="primary-btn">
                Submit Project
              </button>

            </form>

          </section>


          {/* SUBMISSION LIST */}

          <section className="submission-list-card">

            <div className="card-title">
              <h2>Submitted Projects</h2>
              <span>{submissions.length} Projects</span>
            </div>

            {submissions.map((submission, index) => (

              <div className="project-card" key={index}>

                <div className="project-top">

                  <div>
                    <h3>{submission.title}</h3>

                    <p>
                      {submission.category} • {submission.technology}
                    </p>
                  </div>

                  <span
                    className={
                      submission.status === "Reviewed"
                        ? "reviewed-status"
                        : "pending-status"
                    }
                  >
                    {submission.status}
                  </span>

                </div>

                <button className="review-link">
                  View Project →
                </button>

              </div>

            ))}

          </section>

        </div>

      </main>

    </div>
  );
}

export default Submissions;