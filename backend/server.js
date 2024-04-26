

import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import studentRoutes from "./routes/studentroute.js";
import adminRoutes from "./routes/adminroute.js";
import teacherRoutes from "./routes/teacherroute.js";
import classRoutes from "./routes/classesroutes.js";
import parentRoutes from "./routes/parentroute.js"
import assignmentRoutes from "./routes/assignmentroutes.js";
import gradesRoutes from './routes/graderoute.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect("mongodb://0.0.0.0:27017/school", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

// Routes
app.use("/api/students", studentRoutes);
app.use("/api/admins", adminRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/parents", parentRoutes);
app.use("/api/classes", classRoutes);
app.use("/api/assignments", assignmentRoutes);
// app.use('/api/students', gradesRoutes);
app.use("/api/grades", gradesRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

