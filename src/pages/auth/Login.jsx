import React, { useState } from "react";
import { Box, TextField, Button, Typography, Container, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import api from "../../api/Api.jsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={10} display="flex" flexDirection="column" gap={2}>
        <Typography variant="h4" textAlign="center">Login</Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <TextField label="Email" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextField label="Password" type="password" fullWidth value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button variant="contained" fullWidth onClick={handleLogin}>Login</Button>
        <Button onClick={() => navigate("/register")}>Register</Button>
        <Button onClick={() => navigate("/forgot-password")}>Forgot Password?</Button>
      </Box>
    </Container>
  );
};

export default Login;
