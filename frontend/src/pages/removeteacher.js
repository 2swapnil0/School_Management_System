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
import Navbar from "../components/adminnavbar"; // Import the Navbar component

const Removeteachers = () => {
  const [teachers, setteachers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchteachers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/teachers");
      setteachers(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchteachers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/teachers/${id}`);
      // After deletion, fetch teachers again to refresh the list
      fetchteachers();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Navbar /> {/* Add the Navbar component */}
      <TableContainer component={Paper} style={{ marginTop: "20px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Action</TableCell> {/* New column for the delete button */}
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
              teachers.map((teacher) => (
                <TableRow key={teacher._id}>
                  <TableCell>{teacher.email}</TableCell>
                  <TableCell>{teacher.name}</TableCell>
                  
                  <TableCell>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDelete(teacher._id)}
                    >
                      Delete
                    </Button>
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

export default Removeteachers;
