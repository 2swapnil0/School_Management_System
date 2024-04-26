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
  Snackbar,
} from "@mui/material";
import { Upload } from "@mui/icons-material";
import Navbar from "../components/studentnavbar";

const AssignmentList = () => {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState(false);

  const fetchAssignments = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/assignments/all");
      setAssignments(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching assignments:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

  const handleFileUpload = async (assignmentId, file) => {
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      console.log(file)

      // Upload file to backend API
      const uploadResponse = await axios.post(`http://localhost:8000/api/assignments/${assignmentId}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", 
        },
      });

      // If upload was successful, fetch updated assignment list
      setUploadSuccess(true);
      setUploading(false);
      fetchAssignments(); // Refresh assignment list
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadError(true);
      setUploading(false);
    }
  };

  const handleSnackbarClose = () => {
    setUploadSuccess(false);
    setUploadError(false);
  };

  return (
    <div>
      <Navbar />
      <TableContainer component={Paper} style={{ marginTop: "20px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Assignment Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell>Action</TableCell>
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
              assignments.map((assignment) => (
                <TableRow key={assignment._id}>
                  <TableCell>{assignment.title}</TableCell>
                  <TableCell>{assignment.description}</TableCell>
                  <TableCell>{assignment.deadline}</TableCell>
                  <TableCell>
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={(e) => handleFileUpload(assignment._id, e.target.files[0])}
                      disabled={uploading}
                    />
                    <Button
                      variant="contained"
                      component="label"
                      startIcon={<Upload />}
                      disabled={uploading}
                    >
                      Upload
                      <input
                        type="file"
                        accept=".pdf"
                        hidden
                        onChange={(e) => handleFileUpload(assignment._id, e.target.files[0])}
                      />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Snackbar
        open={uploadSuccess || uploadError}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={uploadSuccess ? "File uploaded successfully!" : "Failed to upload file. Please try again."}
      />
    </div>
  );
};

export default AssignmentList;
