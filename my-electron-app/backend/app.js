import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

// test route
app.get("/api/ping", (req, res) => {
  res.json({ message: "Backend is working!" });
});

export default app;
