import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Box, Typography, Paper, TextField, CircularProgress } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { LightPurpleButton } from "../components/buttonstyle.js";
import axios from "axios";

const defaultTheme = createTheme();

const StudentLogin = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [admissionNumber, setAdmissionNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8000/api/students/login", { admissionNumber, password });
      const { token } = response.data;

      localStorage.setItem("studentToken", token); // Store the token in local storage

      // Redirect the user to the dashboard or any other desired page after successful login
      navigate("/StudentDashboard");
    } catch (error) {
      setError("Invalid admission number or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component="main"
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" sx={{ mb: 2, color: "#2c2143" }}>
              Student Login
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 2 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="admissionNumber"
                label="Enter your admission number"
                name="admissionNumber"
                autoComplete="admissionNumber"
                autoFocus
                value={admissionNumber}
                onChange={(e) => setAdmissionNumber(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <LightPurpleButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : "Login"}
              </LightPurpleButton>
              {error && (
                <Typography variant="body2" color="error" align="center">
                  {error}
                </Typography>
              )}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default StudentLogin;