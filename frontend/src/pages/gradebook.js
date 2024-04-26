import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  CircularProgress,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Navbar from "../components/adminnavbar"; // Import the Navbar component

const Gradebook = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/students");
        setStudents(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const handleAddGrades = (studentId) => {
    // Redirect to the add grades page with the student ID
    // Example URL: /add-grades/:studentId
  };

  return (
    <div>
      <Navbar /> {/* Add the Navbar component */}
      <TableContainer component={Paper} style={{ marginTop: "20px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Roll No</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Standard</TableCell>
              <TableCell>Action</TableCell> {/* Add a column for the action button */}
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  <CircularProgress />
                </TableCell>
              </TableRow>
            ) : (
              students.map((student) => (
                <TableRow key={student._id}>
                  <TableCell>{student.rollno}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.standard}</TableCell>
                  <TableCell>
                    {/* Use Link component to redirect to the add grades page */}
                    <Link
                      to={`/addgrades`}
                      style={{ textDecoration: "none" }}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                      >
                        Add Grades
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Gradebook;
