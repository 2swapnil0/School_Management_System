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
import Navbar from "../components/teachernavbar"; // Import the Navbar component

const RemoveClasses = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchClasses = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/classes");
      setClasses(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/classes/${id}`);
      // After deletion, fetch classes again to refresh the list
      fetchClasses();
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
              <TableCell>Subject</TableCell>
              <TableCell>Topic</TableCell>
              <TableCell>Time Period</TableCell>
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
              classes.map((classItem) => (
                <TableRow key={classItem._id}>
                  <TableCell>{classItem.subject}</TableCell>
                  <TableCell>{classItem.topic}</TableCell>
                  <TableCell>{classItem.timePeriod}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDelete(classItem._id)}
                    >
                      Mark As Done
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

export default RemoveClasses;
