import express from "express";
import { addGrades , getGradesByAdmissionNumber } from "../controllers/gradecontroller.js";

const router = express.Router();

router.post("/", addGrades);
router.get('/:admissionNumber', getGradesByAdmissionNumber);

export default router;
