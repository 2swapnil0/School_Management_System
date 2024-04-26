import React from "react";
import { Container, Grid, Box } from "@mui/material";
import Students from "../assets/students.png";
import "./homepage.css";

const Homepage = () => {
  return (
    <Container className="container">
      <Grid container spacing={0}>
        <Grid item xs={12} md={6}>
          <img src={Students} alt="students" style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="paper">
            <h1 className="title">
              Welcome to
              <br />
              School Management System
              <br />
              Developed By Swapnil Mhatre
            </h1>
            <p className="text">
              This is a comprehensive school management system prototype using
              the MERN (MongoDB, Express.js, React.js, Node.js) stack.
            </p>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Homepage;



// import React from "react";
// import { Link } from "react-router-dom";

// const Homepage = () => {
//   return (
//     <div>
//       <h1>Homepage</h1>
//       <Link to="/choose">Choose User</Link>
//     </div>
//   );
// };

// export default Homepage;
