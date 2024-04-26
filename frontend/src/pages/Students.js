import React from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Paper,
  Box,
  Container,
  CircularProgress,
  Backdrop,
} from "@mui/material";
import { AccountCircle, School, Group } from "@mui/icons-material";
import styled from "styled-components";
import Navbar from "../components/adminnavbar.js"; // Import the Navbar component

const Student = () => {
  return (
    <div>
      <Navbar /> {/* Add the Navbar component */}
      <StyledContainer>
      <Container>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Link to="/addstudents">
              <StyledPaper elevation={3}>
                <Box mb={2}>
                  <AccountCircle fontSize="large" />
                </Box>
                <StyledTypography>Add Students</StyledTypography>
              </StyledPaper>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link to="/allstudents">
              <StyledPaper elevation={3}>
                <Box mb={2}>
                  <School fontSize="large" />
                </Box>
                <StyledTypography>All Students</StyledTypography>
              </StyledPaper>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link to="/removestudent">
              <StyledPaper elevation={3}>
                <Box mb={2}>
                  <Group fontSize="large" />
                </Box>
                <StyledTypography>Remove Student</StyledTypography>
              </StyledPaper>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </StyledContainer>
    </div>
  );
};

export default Student;

const StyledContainer = styled.div`
  background: linear-gradient(to bottom, #411d70, #19118b);
  height: 120vh;
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

const StyledPaper = styled(Paper)`
  padding: 20px;
  text-align: center;
  background-color: #1f1f38;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;

  &:hover {
    background-color: #2c2c6c;
    color: white;
  }
`;

const StyledPaperTeacher = styled(Paper)`
  padding: 20px;
  text-align: center;
  background-color: #1976d2; /* Use teacher's color for parents */
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;

  &:hover {
    background-color: #115293; /* Use teacher's hover color for parents */
    color: white;
  }
`;

const StyledTypography = styled.h2`
  margin-bottom: 10px;
`;
