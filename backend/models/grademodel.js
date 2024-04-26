import mongoose from "mongoose";

const { Schema, model } = mongoose;

const gradesSchema = new Schema({
  admissionNumber: {
    type: String,
    required: true,
  },
  english: {
    type: Number,
    required: true,
  },
  hindi: {
    type: Number,
    required: true,
  },
  marathi: {
    type: Number,
    required: true,
  },
  maths: {
    type: Number,
    required: true,
  },
  science: {
    type: Number,
    required: true,
  },
  socialStudies: {
    type: Number,
    required: true,
  },
  drawing: {
    type: Number,
    required: true,
  },
  attendance: {
    type: Number,
    required: true,
  },
});

const Grades = model("Grades", gradesSchema);

export default Grades;
