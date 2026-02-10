import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// SQLite file inside backend folder (works for dev and packaged)
const dbPath = path.join(__dirname, "pos.db");

const db = new Database(dbPath);
export default db;
