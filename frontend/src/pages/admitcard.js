import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Container,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import Navbar from "../components/parentnavbar";

// Register fonts
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const YourComponent = () => {
  const [admissionNumber, setAdmissionNumber] = useState('');
  const [grades, setGrades] = useState(null);

  const handleAdmissionNumberChange = (event) => {
      setAdmissionNumber(event.target.value);
  };

  const fetchGrades = () => {
      fetch(`http://localhost:8000/api/grades/${admissionNumber}`)
          .then(response => response.json())
          .then(data => {
              // Assuming the response data structure is { subject1: marks1, subject2: marks2, ... }
              setGrades(data);
          })
          .catch(error => {
              console.error('Error fetching grades:', error);
          });
  };

  const generatePDFReport = () => {
      if (grades) {
          // Define table headers
          const tableHeaders = ['Subject', 'Maximum Marks', 'Marks Obtained'];

          // Filter out unwanted fields and calculate maximum marks for each subject (assuming it's 100)
          const subjectData = Object.keys(grades).map(subject => {
              return [subject, 100, grades[subject]];
          });

          // Define table body
          const tableBody = [tableHeaders, ...subjectData];

          // Define document definition for PDF
          const docDefinition = {
              content: [
                  { text: 'Admission Number: ' + admissionNumber },
                  { text: '\nGrades:\n', fontSize: 14 },
                  {
                      table: {
                          widths: ['*', '*', '*'],
                          body: tableBody
                      }
                  }
              ]
          };

          // Generate PDF
          pdfMake.createPdf(docDefinition).download('report_card.pdf');
      }
  };
  

  

  return (
    <div> 
        <Navbar />
    <Container>
      <Box mt={4}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Admission Number"
              value={admissionNumber}
              onChange={handleAdmissionNumberChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={fetchGrades}
            >
              Fetch Grades
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="secondary"
              onClick={generatePDFReport}
              disabled={!grades}
            >
              Generate PDF Report Card
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
    </div>
  );
};

export default YourComponent;




// http://localhost:8000/api/grades/${admissionNumber}