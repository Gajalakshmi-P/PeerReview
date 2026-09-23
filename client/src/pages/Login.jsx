import { useState } from "react";

function Login({ goToRegister, goToDashboard }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      // Save logged-in user information
      localStorage.setItem("user", JSON.stringify(data.user));

      alert("Login successful!");

      goToDashboard();
    } catch (error) {
      console.log("Login error:", error);
      alert("Unable to connect to the server.");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="auth-logo">PeerReview</div>

        <h1>Welcome back 👋</h1>

        <p className="auth-subtitle">
          Login to continue reviewing and improving projects.
        </p>

        <form onSubmit={handleLogin}>

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="auth-button">
            Login
          </button>

        </form>

        <p className="auth-footer">
          Don't have an account?{" "}
          <span onClick={goToRegister}>Create an account</span>
        </p>

      </div>
    </div>
  );
}

export default Login;