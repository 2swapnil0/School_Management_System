// Student Registration Component

import React, { useState } from "react";
import axios from "axios";
import { Grid, Box, Typography, Paper, TextField, Button, CircularProgress, Snackbar } from "@mui/material";
import Navbar from "../components/adminnavbar.js"; // Import the Navbar component

const StudentRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    admissionNumber: "",
    standard: "",
    password: ""
  });
  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:8000/api/students/register", formData);
      console.log(response.data);
      localStorage.setItem("token", response.data.token); // Store the token in local storage
      setMessage("Student registered successfully");
      setOpenSnackbar(true);
      setLoading(false);
      // Redirect the user to the desired page after successful registration
      // For example:
      // window.location.href = "/dashboard";
    } catch (error) {
      console.error("Error:", error);
      setMessage("Failed to register student. Please try again.");
      setOpenSnackbar(true);
      setLoading(false);
    }
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <div>
      <Navbar />
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Paper elevation={3} sx={{ padding: 2, marginTop: "20vh" }}>
            <Typography variant="h6" align="center" gutterBottom>
              Add Student
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Admission Number"
                name="admissionNumber"
                value={formData.admissionNumber}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Standard"
                name="standard"
                value={formData.standard}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                margin="normal"
                required
              />
              <Box mt={2} textAlign="center">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={loading}
                >
                  {loading ? <CircularProgress size={24} /> : "Add Student"}
                </Button>
              </Box>
            </form>
          </Paper>
        </Grid>
      </Grid>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={message}
      />
    </div>
  );
};

export default StudentRegister;
