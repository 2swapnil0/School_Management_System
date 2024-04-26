// classRoutes.js
import express from "express";
import { addClass , getAllClasses, deleteClass } from "../controllers/classescontrollers.js";

const router = express.Router();

router.post("/add", addClass);
router.get("/", getAllClasses);
router.delete("/:id", deleteClass);

export default router;
