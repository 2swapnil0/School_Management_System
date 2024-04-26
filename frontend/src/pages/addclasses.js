import React, { useState } from "react";
import axios from "axios";
import {
  Grid,
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  CircularProgress,
  Snackbar,
} from "@mui/material";
import Navbar from "../components/teachernavbar.js";

const AddClass = () => {
  const [formData, setFormData] = useState({
    subject: "",
    topic: "",
    timePeriod: "",
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
      const response = await axios.post(
        "http://localhost:8000/api/classes/add",
        formData
      );
      console.log(response.data);
      setMessage(response.data.message);
      setOpenSnackbar(true);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setMessage("Failed to add class. Please try again.");
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
              Add Class
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Topic"
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Time Period"
                name="timePeriod"
                value={formData.timePeriod}
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
                  {loading ? <CircularProgress size={24} /> : "Add Class"}
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

export default AddClass;
