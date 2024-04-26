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

const ChooseUser = ({ visitor }) => {
  return (
    <StyledContainer>
      <Container>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Link to="/Adminlogin">
              <StyledPaper elevation={3}>
                <Box mb={2}>
                  <AccountCircle fontSize="large" />
                </Box>
                <StyledTypography>Admin</StyledTypography>
                Login as an administrator to access the dashboard to manage app
                data.
              </StyledPaper>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link to="/Studentlogin">
              <StyledPaper elevation={3}>
                <Box mb={2}>
                  <School fontSize="large" />
                </Box>
                <StyledTypography>Student</StyledTypography>
                Login as a student to explore course materials and assignments.
              </StyledPaper>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link to="/Teacherlogin">
              <StyledPaper elevation={3}>
                <Box mb={2}>
                  <Group fontSize="large" />
                </Box>
                <StyledTypography>Teacher</StyledTypography>
                Login as a teacher to create courses, assignments, and track
                student progress.
              </StyledPaper>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link to="/Parentlogin">
              <StyledPaperTeacher elevation={3}>
                <Box mb={2}>
                  <Group fontSize="large" />
                </Box>
                <StyledTypography>Parents</StyledTypography>
                Login as a parent to view student progress and communicate with
                teachers.
              </StyledPaperTeacher>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </StyledContainer>
  );
};

export default ChooseUser;

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
