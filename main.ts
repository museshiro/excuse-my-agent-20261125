import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I outsourced your deadline to a smaller model. " +
  "It has been thinking for six hours, " +
  "and it just asked me what a deadline is.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE);
