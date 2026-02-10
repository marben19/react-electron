import db from "../config/db.js";
import bcrypt from "bcryptjs";

export async function createUser(name, email, password, role = "cashier") {
  const hashed = await bcrypt.hash(password, 10);
  const stmt = db.prepare(
    "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)"
  );
  const info = stmt.run(name, email, hashed, role);
  return info;
}

export function getUserByEmail(email) {
  const stmt = db.prepare("SELECT * FROM users WHERE email = ?");
  return stmt.get(email);
}

export function getAllUsers() {
  const stmt = db.prepare("SELECT id, name, email, role, created_at FROM users");
  return stmt.all(); // returns an array of users
}
