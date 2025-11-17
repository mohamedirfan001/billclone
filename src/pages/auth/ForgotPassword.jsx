import React, { useState } from "react";
import { Box, TextField, Button, Typography, Container, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import api from "../../api/Api.jsx";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleForgotPassword = async () => {
    try {
      await api.post("/auth/forgot-password", { email });
      setSuccess("Password reset link sent to your email!");
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to send reset link");
      setSuccess("");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={10} display="flex" flexDirection="column" gap={2}>
        <Typography variant="h4" textAlign="center">Forgot Password</Typography>
        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">{success}</Alert>}
        <TextField
          label="Email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button variant="contained" fullWidth onClick={handleForgotPassword}>
          Send Reset Link
        </Button>
        <Button onClick={() => navigate("/login")}>Back to Login</Button>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
