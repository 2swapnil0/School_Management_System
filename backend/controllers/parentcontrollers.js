import Parent from "../models/parentmodel.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';
import dotenv from "dotenv";
dotenv.config();

// Controller to handle Parent registration
export const register= async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {name, email, password } = req.body;

  try {
    let parent = await Parent.findOne({ email });

    if (parent) {
      return res.status(400).json({ message: 'User already exists' });
    }

    parent = new Parent({
      name,
      email,
      password
    });

    const salt = await bcrypt.genSalt(10);
    parent.password = await bcrypt.hash(password, salt);

    await parent.save();

    const payload = {
      parent: {
        id: parent.id
      }
    };

    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// Controller to handle Parent login
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let parent = await Parent.findOne({ email });

    if (!parent) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, parent.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const payload = {
      parent: {
        id: parent.id
      }
    };

    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// Controller to delete Parent
export const deleteParent = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedParent = await Parent.findByIdAndDelete(id);
    if (!deletedParent) {
      return res.status(404).json({ message: "Parent not found." });
    }
    res.status(200).json({ message: "Parent removed successfully." });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

// Controller to get all Parents
export const getAllParents = async (req, res) => {
  try {
    const parents = await Parent.find();
    res.json(parents);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};
