import { writeFileSync, mkdirSync } from "node:fs";

// One funny out-of-office auto-reply for make.fun's The Funniest AI
// Out-of-Office Reply bounty. Writes one line (<=160 chars) to
// /output/entry.txt, deterministically.
const line =
  "I'm on vacation. Urgent matters will be escalated to my future self, who has already declined.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
