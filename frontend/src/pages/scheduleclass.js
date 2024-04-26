import React from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Paper,
  Box,
  Container,
} from "@mui/material";
import { Schedule, EventAvailable, EventBusy } from "@mui/icons-material";
import styled from "styled-components";
import Navbar from "../components/teachernavbar.js";

const Classes = () => {
  return (
    <div>
      <Navbar />
      <StyledContainer>
        <Container>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Link to="/addclasses">
                <StyledPaper elevation={3}>
                  <Box mb={2}>
                    <Schedule fontSize="large" />
                  </Box>
                  <StyledTypography>Add Class</StyledTypography>
                </StyledPaper>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Link to="/viewclassteacher">
                <StyledPaper elevation={3}>
                  <Box mb={2}>
                    <EventAvailable fontSize="large" />
                  </Box>
                  <StyledTypography>View Class</StyledTypography>
                </StyledPaper>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Link to="/completeclass">
                <StyledPaper elevation={3}>
                  <Box mb={2}>
                    <EventBusy fontSize="large" />
                  </Box>
                  <StyledTypography>Complete Class</StyledTypography>
                </StyledPaper>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </StyledContainer>
    </div>
  );
};

export default Classes;

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

const StyledTypography = styled.h2`
  margin-bottom: 10px;
`;
