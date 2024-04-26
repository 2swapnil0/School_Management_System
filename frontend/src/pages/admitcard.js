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

const AdmitCardPage = () => {
  const [admissionNumber, setAdmissionNumber] = useState("");
  const [grades, setGrades] = useState(null);

  const handleAdmissionNumberChange = (e) => {
    setAdmissionNumber(e.target.value);
  };

  const fetchGrades = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/grades/${admissionNumber}`
      );
      setGrades(response.data);
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };

  const generatePDFReport = () => {
    if (!grades) {
        console.error("No grades data available");
        return;
    }

    const maxMarks = 100;

    const documentDefinition = {
        content: [
            { text: "Admit Card", style: "header" },
            { text: `Admission Number: ${admissionNumber}`, margin: [0, 0, 0, 10] },
            { text: "Subject Grades:", style: "subheader" },
            {
                table: {
                    headerRows: 1,
                    widths: ['*', 'auto', 'auto'],
                    body: [
                        ['Subject', 'Marks Obtained', 'Maximum Marks'],
                        ['English', grades.english, maxMarks],
                        ['Hindi', grades.hindi, maxMarks],
                        ['Marathi', grades.marathi, maxMarks],
                        ['Maths', grades.maths, maxMarks],
                        ['Science', grades.science, maxMarks],
                        ['Social Studies', grades.socialStudies, maxMarks],
                        ['Drawing', grades.drawing, maxMarks],
                        ['Attendance', grades.attendance, maxMarks],
                    ]
                },
                margin: [0, 0, 0, 10]
            },
        ],
        styles: {
            header: {
                fontSize: 22,
                bold: true,
                alignment: "center",
                margin: [0, 0, 0, 20]
            },
            subheader: {
                fontSize: 18,
                bold: true,
                margin: [0, 0, 0, 10]
            }
        }
    };

    pdfMake.createPdf(documentDefinition).open();
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

export default AdmitCardPage;
