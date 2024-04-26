// models/studentmodel.js

import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  admissionNumber: {
    type: String,
    required: true,
    unique: true,
  },
  standard: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Student = mongoose.model('Student', studentSchema);

export default Student;
