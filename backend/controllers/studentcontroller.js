import Student from "../models/studentmodel.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';
import dotenv from "dotenv";
dotenv.config();

// Controller to handle student registration
export const registerStudent = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, admissionNumber, standard, password } = req.body;

  try {
    let student = await Student.findOne({ admissionNumber });

    if (student) {
      return res.status(400).json({ message: 'Student already exists' });
    }

    student = new Student({
      name,
      admissionNumber,
      standard,
      password
    });

    const salt = await bcrypt.genSalt(10);
    student.password = await bcrypt.hash(password, salt);

    await student.save();

    const payload = {
      student: {
        id: student.id
      }
    };

    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// Controller to handle student login
export const loginStudent = async (req, res) => {
  const { admissionNumber, password } = req.body;

  try {
    let student = await Student.findOne({ admissionNumber });

    if (!student) {
      return res.status(400).json({ message: 'Invalid admission number or password' });
    }

    const isMatch = await bcrypt.compare(password, student.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid admission number or password' });
    }

    const payload = {
      student: {
        id: student.id
      }
    };

    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};


export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

// export const registerStudent = async (req, res) => {
//   const { name, standard, rollno, password } = req.body;

//   try {
//     // Create new student
//     const newStudent = new Student({ name, standard, rollno, password });

//     console.log("New student object:", newStudent); // Log the new student object

//     // Save student to the database
//     await newStudent.save();

//     console.log("New student saved to the database:", newStudent); // Log confirmation after saving

//     res.status(201).json(newStudent);
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };


export const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedStudent = await Student.findByIdAndDelete(id);
    if (!deletedStudent) {
      return res.status(404).json({ message: "Student not found." });
    }
    res.status(200).json({ message: "Student removed successfully." });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};


export const getStudentByAdmissionNumber = async (req, res) => {
  const { admissionNumber } = req.params;
  try {
    const student = await Student.findOne({ admissionNumber });
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json(student);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};