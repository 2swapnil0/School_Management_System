import React from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Paper,
  Box,
  Container,
} from "@mui/material";
import { Person, ChildCare, EventNote } from "@mui/icons-material";
import styled from "styled-components";
import Navbar from "../components/adminnavbar.js"; // Import the Navbar component

const Parent = () => {
  return (
    <div>
      <Navbar /> {/* Add the Navbar component */}
      <StyledContainer>
        <Container>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Link to="/addparent">
                <StyledPaper elevation={3}>
                  <Box mb={2}>
                    <ChildCare fontSize="large" />
                  </Box>
                  <StyledTypography>Add Parents</StyledTypography>
                </StyledPaper>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Link to="/allparents ">
                <StyledPaper elevation={3}>
                  <Box mb={2}>
                    <Person fontSize="large" />
                  </Box>
                  <StyledTypography>All Parents</StyledTypography>
                </StyledPaper>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Link to="/removeparents">
                <StyledPaper elevation={3}>
                  <Box mb={2}>
                    <EventNote fontSize="large" />
                  </Box>
                  <StyledTypography>Remove Parents</StyledTypography>
                </StyledPaper>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </StyledContainer>
    </div>
  );
};

export default Parent;

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
