import React from "react";
import { Document, Page, Text, View, StyleSheet, PDFViewer } from "@react-pdf/renderer";

const ReportCard = ({ studentName, grades, attendance }) => {
  // Function to calculate total marks
  const calculateTotalMarks = () => {
    const totalMarks = Object.values(grades).reduce((acc, grade) => acc + parseFloat(grade), 0);
    return totalMarks.toFixed(2);
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Report Card</Text>
          <Text style={styles.studentName}>{studentName}</Text>
          <View style={styles.gradeSection}>
            {Object.entries(grades).map(([subject, grade]) => (
              <View style={styles.gradeRow} key={subject}>
                <Text style={styles.gradeLabel}>{subject}:</Text>
                <Text style={styles.gradeValue}>{grade}</Text>
              </View>
            ))}
          </View>
          <Text style={styles.totalMarks}>Total Marks: {calculateTotalMarks()}</Text>
          <Text style={styles.attendance}>Attendance: {attendance}%</Text>
        </View>
      </Page>
    </Document>
  );
};

// Styles for the report card
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: 20,
  },
  section: {
    margin: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  studentName: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
  },
  gradeSection: {
    marginBottom: 10,
  },
  gradeRow: {
    flexDirection: "row",
    marginBottom: 5,
  },
  gradeLabel: {
    width: "50%",
  },
  gradeValue: {
    width: "50%",
  },
  totalMarks: {
    marginTop: 10,
  },
  attendance: {
    marginTop: 10,
  },
});

export default ReportCard;
