// auth.js

import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Admin from '../models/adminmodel.js'; // Import Admin model
import Student from '../models/studentmodel.js';
import Teacher from '../models/teachermodel.js';

const router = express.Router();



// Register new admin
router.post('/register/admin', async (req, res) => {
    try {
        const { adminName, schoolName, email, password } = req.body;

        // Check if admin already exists
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({ message: 'Admin already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new admin
        const newAdmin = new Admin({ adminName, schoolName, email, password: hashedPassword });
        await newAdmin.save();

        res.status(201).json({ message: 'Admin registered successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Register new student
router.post('/register/student', async (req, res) => {
    // Remaining code unchanged
});

// Register new teacher
router.post('/register/teacher', async (req, res) => {
    // Remaining code unchanged
});

// Login route (combining admin, student, and teacher login)
router.post('/login', async (req, res) => {
    // Remaining code unchanged
});

export default router;
