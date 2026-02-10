import app from "./app.js";
import { initDB } from "./config/init-db.js";

const PORT = 3001;

// Initialize DB
initDB();

app.listen(PORT, () => {
  console.log(`🚀 POS backend running on http://localhost:${PORT}`);
});
