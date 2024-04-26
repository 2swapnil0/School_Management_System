import express from "express";
import { login, register, getAllParents, deleteParent } from '../controllers/parentcontrollers.js';
import { check } from 'express-validator';

const router = express.Router();

const validateRegistration = [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
  ];

// Route to register a new Parent



router.get('/', getAllParents);
router.post('/register', validateRegistration, register);
router.post('/login', login);
router.delete('/:id', deleteParent);

export default router;