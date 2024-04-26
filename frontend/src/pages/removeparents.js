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

const RemoveParents = () => {
  const [parents, setParents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchParents = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/parents");
      setParents(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchParents();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/parents/${id}`);
      // After deletion, fetch parents again to refresh the list
      fetchParents();
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
              parents.map((parent) => (
                <TableRow key={parent._id}>
                  <TableCell>{parent.email}</TableCell>
                  <TableCell>{parent.name}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDelete(parent._id)}
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

export default RemoveParents;
