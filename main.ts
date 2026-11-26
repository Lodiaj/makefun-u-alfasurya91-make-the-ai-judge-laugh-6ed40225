import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// Make the AI Judge Laugh (u-alfasurya91-make-the-ai-judge-laugh-6ed40225)
// Writes a single office-life joke, 200 characters or fewer, to /output/entry.txt.
// The line is fixed and deterministic: no randomness, no network, no input.
const LINE =
  "I told the printer it was out of paper, so it printed a 40-page error report to prove me wrong.";

// Gate: the entry must be 1-200 characters of non-whitespace text.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} characters; must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");

// Read back what was written and verify it is exactly the intended line:
// a truncated or mangled write must fail loudly instead of passing the gate.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE + "\n") {
  throw new Error("entry.txt read-back mismatch");
}
