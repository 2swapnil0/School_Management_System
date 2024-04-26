// classController.js
import Class from "../models/classesmodel.js  ";

export const addClass = async (req, res) => {
  const { subject, topic, timePeriod } = req.body;

  try {
    const newClass = new Class({ subject, topic, timePeriod });
    await newClass.save();
    res.status(201).json({ message: "Class added successfully", class: newClass });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllClasses = async (req, res) => {
  try {
    const classes = await Class.find();
    res.status(200).json(classes);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

export const deleteClass = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedClass = await Class.findByIdAndDelete(id);
    if (!deletedClass) {
      return res.status(404).json({ message: "Class not found." });
    }
    res.status(200).json({ message: "Class removed successfully." });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};


