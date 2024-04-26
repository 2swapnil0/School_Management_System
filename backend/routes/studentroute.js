import express from "express";
import { registerStudent , getAllStudents , deleteStudent , loginStudent, getStudentByAdmissionNumber} from "../controllers/studentcontroller.js";

const router = express.Router();

// Route to register a new student



router.get("/", getAllStudents);
router.post("/register", registerStudent);
router.delete("/:id", deleteStudent);
router.post("/login", loginStudent);
router.get('/:admissionNumber', getStudentByAdmissionNumber);

export default router;