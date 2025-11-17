import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/landing1.css"; // Reuse landing styles or create separate login.css

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add real auth logic here
    alert(`Logged in as ${email}`);
    navigate("/dashboard"); // Redirect after login
  };

  return (
    <div className="landing-page" style={{ paddingTop: "100px", textAlign: "center" }}>
      <h2>Login to BillClone</h2>
      <form onSubmit={handleLogin} style={{ maxWidth: "400px", margin: "20px auto" }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: "100%", padding: "12px", margin: "10px 0", borderRadius: "8px", border: "1px solid #ccc" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: "100%", padding: "12px", margin: "10px 0", borderRadius: "8px", border: "1px solid #ccc" }}
        />
        <button type="submit" style={{ width: "100%", padding: "12px", background: "#ff7d00", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer" }}>
          Login
        </button>
      </form>
      <p>
        Don’t have an account? <Link to="/signup">Sign up here</Link>
      </p>
    </div>
  );
}
