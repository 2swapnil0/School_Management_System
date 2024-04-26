// routes/assignmentRoutes.js
import express from "express";
import {
  addAssignment,
  getAllAssignments,
  deleteAssignment,
} from "../controllers/assignmentcontroller.js  ";

const router = express.Router();

router.post("/add", addAssignment);
router.get("/all", getAllAssignments);
router.delete("/:id", deleteAssignment);

export default router;
