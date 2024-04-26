// import express from 'express';
// import bcrypt from 'bcryptjs';
// import Admin from '../models/adminmodel.js';

// const router = express.Router();

// router.post('/register', async (req, res) => {
//   try {
//     const { adminName, schoolName, email, password } = req.body;

//     // Check if admin already exists
//     const existingAdmin = await Admin.findOne({ email });
//     if (existingAdmin) {
//       return res.status(400).json({ message: 'Admin already exists' });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create new admin
//     const newAdmin = new Admin({ adminName, schoolName, email, password: hashedPassword });
//     await newAdmin.save();

//     res.status(201).json({ message: 'Admin registered successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// export default router;



// import express from "express";
// import { registerAdmin } from "../controllers/admincontrollers.js";

// const router = express.Router();

// // Route to register a new student
// router.post("/register", registerAdmin);

// export default router;


// adminroute.js

import express from "express";
import { registerAdmin, loginAdmin } from "../controllers/admincontrollers.js";

const router = express.Router();

// Route to register a new admin
router.post("/register", registerAdmin);

// Route to login admin
router.post("/login", loginAdmin);

export default router;
