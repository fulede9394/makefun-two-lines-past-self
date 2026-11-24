// Two Lines to Your Past Self — line one warns a past self about one specific
// moment; line two says why it mattered. First draft.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const ENTRY =
  "Don't send that 2 a.m. email to your boss — the one that starts 'just a thought' and ends your weekend.\n" +
  "It bought you three days of damage control and a meeting titled 'tone'.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY, 'utf8');
