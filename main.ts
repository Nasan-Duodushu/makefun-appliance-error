// The Funniest Honest Appliance Error — entry program.
// Writes one honest appliance error message (<=200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const parts = [
  "ERROR E17:",
  "I washed this sock four times.",
  "It is still in here.",
  "It lives here now.",
];
const line = parts.join(" ");

if (line.length > 200 || line.trim().length === 0) {
  throw new Error("error message fails the 1-200 character gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`wrote ${line.length} chars to /output/entry.txt`);
