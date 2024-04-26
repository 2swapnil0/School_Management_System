import Grades from "../models/grademodel.js";

export const addGrades = async (req, res) => {
  try {
    const {
      admissionNumber,
      english,
      hindi,
      marathi,
      maths,
      science,
      socialStudies,
      drawing,
      attendance,
    } = req.body;

    const newGrades = new Grades({
      admissionNumber,
      english,
      hindi,
      marathi,
      maths,
      science,
      socialStudies,
      drawing,
      attendance,
    });

    await newGrades.save();

    res.status(201).json({ message: "Grades added successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getGradesByAdmissionNumber = async (req, res) => {
  const { admissionNumber } = req.params;

  try {
    const grades = await Grades.findOne({ admissionNumber });

    if (!grades) {
      return res.status(404).json({ message: "Grades not found." });
    }

    res.status(200).json(grades);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};