import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/landing1.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Add signup logic here
    alert(`Account created for ${email}`);
    navigate("/login"); // Redirect after signup
  };

  return (
    <div className="landing-page" style={{ paddingTop: "100px", textAlign: "center" }}>
      <h2>Create an Account</h2>
      <form onSubmit={handleSignup} style={{ maxWidth: "400px", margin: "20px auto" }}>
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
          Sign Up
        </button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
}
