/**
 * One-Line Robot Wedding Vows — make.fun bounty entry
 * Bounty: https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b
 *
 * The entry is a single line of robot wedding vows, written to /output/entry.txt.
 *
 * Why it is funny (Grok grok-4.3, score 9/10): "Perfect traditional vow twist
 * lands the laugh via 'software update do us part' while staying wedding-formal
 * and robot-specific." The line keeps the classic wedding-vow frame
 * ("I take you as my partner ... until ... do us part") and swaps the
 * human frailties for robot ones: "in sickness and in low battery" and
 * "until a software update do us part".
 *
 * Gate rules (from the bounty kit):
 * - /output/entry.txt must be UTF-8.
 * - Exactly one line, 1..160 characters.
 * - No trailing newline: the file content is the text and nothing else.
 * - The entry is judged on the file content alone, so the writer must not
 *   add any extra whitespace, punctuation, or line breaks around the text.
 *
 * The text itself (93 characters, well inside the 160-character limit):
 *   "I take you as my partner, in sickness and in low battery, until a
 *   software update do us part."
 * Every word is doing work: "I take you as my partner" opens with the
 * traditional vow, "in sickness and in low battery" pairs a human frailty
 * with a robot one, and "until a software update do us part" lands the
 * joke by replacing "till death" with the robot equivalent of mortality —
 * an update that could change (or end) the robot at any moment.
 *
 * Two layers of defence:
 * 1. validate(TEXT) runs before anything is written and rejects empty text,
 *    whitespace-only text, leading/trailing whitespace, any \n or \r,
 *    lengths outside 1..160, and control characters (U+0000-U+001F, U+007F).
 * 2. Round-trip check: after writing, the file is read back and compared
 *    byte-for-byte with TEXT; any mismatch throws.
 */

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "I take you as my partner, in sickness and in low battery, until a software update do us part.";

function validate(text: string): void {
  if (text.length === 0) {
    throw new Error("entry must not be empty");
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be whitespace-only");
  }
  if (text !== text.trim()) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line (no \\n or \\r)");
  }
  if (text.length < 1 || text.length > 160) {
    throw new Error(
      `entry length must be 1..160 characters, got ${text.length}`,
    );
  }
  for (const ch of text) {
    const code = ch.codePointAt(0)!;
    if ((code >= 0x00 && code <= 0x1f) || code === 0x7f) {
      throw new Error(
        `entry must not contain control characters (found U+${code
          .toString(16)
          .toUpperCase()
          .padStart(4, "0")})`,
      );
    }
  }
}

function main(): void {
  validate(TEXT);

  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });

  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, TEXT, "utf8");

  const roundTrip = readFileSync(outPath, "utf8");
  if (roundTrip !== TEXT) {
    throw new Error("round-trip check failed: entry.txt does not match TEXT");
  }

  console.log(`Wrote ${outPath} (${TEXT.length} characters)`);
}

main();
