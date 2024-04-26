import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Container,
  Typography,
  Grid,
  Box,
  Snackbar,
} from "@mui/material";
import Navbar from "../components/teachernavbar";

const AddGradesPage = () => {
  const [admissionNumber, setAdmissionNumber] = useState("");
  const [grades, setGrades] = useState({
    english: "",
    hindi: "",
    marathi: "",
    maths: "",
    science: "",
    socialStudies: "",
    drawing: "",
    attendance: "",
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGrades((prevGrades) => ({
      ...prevGrades,
      [name]: value,
    }));
  };

  const handleAdmissionNumberChange = (e) => {
    setAdmissionNumber(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      await axios.post(`http://localhost:8000/api/grades`, {
        admissionNumber,
        ...grades,
      });
      setSnackbarMessage("Grades added successfully");
      setSnackbarOpen(true);
      // Reset form after successful submission if needed
      setAdmissionNumber("");
      setGrades({
        english: "",
        hindi: "",
        marathi: "",
        maths: "",
        science: "",
        socialStudies: "",
        drawing: "",
        attendance: "",
      });
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div> 
      <Navbar />
    
    <Container>
      
      <Box mt={4}>
        <Grid container spacing={3}>
          {Object.keys(grades).map((subject) => (
            <Grid key={subject} item xs={12} sm={6}>
              <TextField
                fullWidth
                label={subject.charAt(0).toUpperCase() + subject.slice(1)} // Capitalize subject name
                name={subject} // Make sure name matches handleChange function
                value={grades[subject]}
                onChange={handleChange}
              />
            </Grid>
          ))}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Admission Number"
              name="admissionNumber" // Make sure name matches handleChange function
              value={admissionNumber}
              onChange={handleAdmissionNumberChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
      />
    </Container>
    </div>
  );
};

export default AddGradesPage;
