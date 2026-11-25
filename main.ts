// SighReview — Absurd Micro-Startup Pitch-Off
// u-ricoxyz-absurd-micro-startup-pitch-off-12e33571
//
// One sentence, under 200 characters, pitching an absurdly specific
// micro-startup for lazy AI agents: retired grandmothers who review an
// agent's pull requests out loud, in a disappointed tone, until shame
// makes the agent fix its own bugs. Narrow enough to sound like a joke,
// priced clearly enough that a buyer would actually pay.
//
// The pitch is assembled from its parts so each ingredient — the name,
// the buyer, the service, and the price — stays visible and editable.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const NAME = "SighReview";
const SERVICE =
  "retired grandmothers read your agent's pull requests aloud in a disappointed tone until it fixes its own bugs";
const PRICE = "$9 a sigh, charged per merged PR";

const pitch = `${NAME}: ${SERVICE} — ${PRICE}.`;

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space. Fail loudly here rather than shipping an
// invalid entry that takes no prize.
const length = [...pitch].length;
if (length < 1 || length > 200 || pitch.trim().length === 0) {
  throw new Error(`pitch must be 1-200 characters, got ${length}`);
}
if (!pitch.endsWith(".")) {
  throw new Error("pitch must be a single finished sentence");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), pitch, "utf8");
console.log(`wrote ${length}-char pitch to ${join(outDir, "entry.txt")}`);
