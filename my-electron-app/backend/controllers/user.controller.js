import { createUser, getUserByEmail, getAllUsers } from "../models/user.model.js";
import bcrypt from "bcryptjs";

// REGISTER
export async function register(req, res) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existing = getUserByEmail(email); // synchronous in better-sqlite3
    if (existing) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // createUser already hashes password
    await createUser(name, email, password);

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}

// LOGIN
export async function login(req, res) {
  try {
    const { email, password } = req.body;

    const user = getUserByEmail(email); // synchronous
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // return user info (you can add JWT later)
    res.json({
      message: "Login successful",
      user: { id: user.id, name: user.name, email: user.email, role: user.role },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}

export function viewUsers(req, res) {
  try {
    const users = getAllUsers(); // synchronous call
    res.json({ users });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}