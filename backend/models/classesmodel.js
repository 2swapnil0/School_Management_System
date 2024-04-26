// classmodel.js
import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  timePeriod: {
    type: String,
    required: true,
  },
});

const Class = mongoose.model("Class", classSchema);

export default Class;
