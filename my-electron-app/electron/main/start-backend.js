import { fork } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

// Fix __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function startBackend() {
  // Fork backend with Node version same as Electron
  const backendPath = path.join(__dirname, "../../backend/server.js");
  const child = fork(backendPath, {
    stdio: "inherit", // show backend logs in console
  });
  console.log("✅ Backend process forked");
}
