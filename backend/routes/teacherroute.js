import express from "express";
import { registerTeacher , getAllTeachers , deleteTeacher , loginTeacher} from "../controllers/teachercontrollers.js";

const router = express.Router();

// Route to register a new Teacher



router.get("/", getAllTeachers);
router.post("/register", registerTeacher);
router.delete("/:id", deleteTeacher);
router.post("/login", loginTeacher);


export default router;