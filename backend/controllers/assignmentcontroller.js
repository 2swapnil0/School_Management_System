// controllers/assignmentController.js
import Assignment from "../models/assignmentmodel.js";

export const addAssignment = async (req, res) => {
  try {
    const { subject, topic, dueDate } = req.body;
    const newAssignment = new Assignment({ subject, topic, dueDate });
    await newAssignment.save();
    res.status(201).json({ message: "Assignment added successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find();
    res.status(200).json(assignments);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteAssignment = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAssignment = await Assignment.findByIdAndDelete(id);
    if (!deletedAssignment) {
      return res.status(404).json({ message: "Assignment not found." });
    }
    res.status(200).json({ message: "Assignment removed successfully." });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};
