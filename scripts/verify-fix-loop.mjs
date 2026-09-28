import { execSync } from "node:child_process";

const STEPS = [
  {
    name: "1. Code Format Verification (Biome)",
    command: "npx @biomejs/biome format src tests scripts",
    fixCommand: "npx @biomejs/biome format --write src tests scripts",
    category: "FORMAT",
  },
  {
    name: "2. Static Linting & Antipatterns",
    command: "npx @biomejs/biome lint src tests scripts",
    fixCommand: "npx @biomejs/biome lint --write src tests scripts",
    category: "LINT",
  },
  {
    name: "3. Design Tokens & Spatial Scale Audit",
    command: "node scripts/design-token-check.mjs",
    fixCommand: "Verify design/design-tokens.json schema and ensure container radiuses <= 8px",
    category: "DESIGN_TOKENS",
  },
  {
    name: "4. UI Anti-Slop & 10-State Completeness Linter",
    command: "node scripts/ui-review.mjs",
    fixCommand:
      "Eliminate gradients, glowing shadows, pill buttons, and specify missing screen states",
    category: "UI_GOVERNANCE",
  },
  {
    name: "5. Headless Browser Multi-Viewport Screenshot Pipeline",
    command: "node scripts/screenshot.mjs",
    fixCommand: "Launch Chrome/Edge headless to render and capture viewports in screenshots/",
    category: "SCREENSHOTS",
  },
  {
    name: "6. Design Governance Regression Test Suite",
    command: "node --test tests/governance/*.test.mjs",
    fixCommand: "Investigate broken design governance assertions and verify file coverage",
    category: "TESTS",
  },
];

console.log(
  "\x1b[1m\x1b[35m======================================================================\x1b[0m",
);
console.log(
  "\x1b[1m\x1b[35m   AI UI DESIGN GOVERNANCE & ANTI-SLOP VERIFICATION GATE               \x1b[0m",
);
console.log(
  "\x1b[1m\x1b[35m======================================================================\x1b[0m\n",
);

const startTime = Date.now();
let hasFailure = false;
let failedStep = null;

for (const step of STEPS) {
  process.stdout.write(`\x1b[34m[RUNNING]\x1b[0m ${step.name}... `);
  try {
    execSync(step.command, { stdio: "pipe", encoding: "utf8" });
    console.log("\x1b[32m[PASS]\x1b[0m");
  } catch (error) {
    console.log("\x1b[31m[FAIL]\x1b[0m\n");
    hasFailure = true;
    failedStep = {
      ...step,
      stdout: error.stdout ? error.stdout.toString() : "",
      stderr: error.stderr ? error.stderr.toString() : error.message,
    };
    break;
  }
}

const elapsedSec = ((Date.now() - startTime) / 1000).toFixed(2);

if (hasFailure && failedStep) {
  console.log(
    "\x1b[1m\x1b[31m======================================================================\x1b[0m",
  );
  console.log(`\x1b[1m\x1b[31m  QUALITY GATE REJECTED at: ${failedStep.name}\x1b[0m`);
  console.log(
    "\x1b[1m\x1b[31m======================================================================\x1b[0m\n",
  );

  console.log("\x1b[33m--- EXECUTION OUTPUT ---\x1b[0m");
  if (failedStep.stdout) console.log(failedStep.stdout.trim());
  if (failedStep.stderr) console.error(failedStep.stderr.trim());

  console.log("\n\x1b[1m\x1b[36m--- AGENT AUTONOMOUS REPAIR GUIDELINES ---\x1b[0m");
  console.log(`1. Target Category: ${failedStep.category}`);
  console.log(`2. Recommended Action: ${failedStep.fixCommand}`);
  console.log(
    "3. Root Cause Requirement: Do NOT silence errors with ignore comments or hardcoded values.",
  );
  console.log("4. Loop: Make the minimal required fix, then re-run: npm run quality\n");

  process.exit(1);
} else {
  console.log(
    "\n\x1b[1m\x1b[32m======================================================================\x1b[0m",
  );
  console.log(`\x1b[1m\x1b[32m  ALL UI DESIGN QUALITY GATES PASSED in ${elapsedSec}s!\x1b[0m`);
  console.log(
    "\x1b[1m\x1b[32m  Tokens, Anti-Slop, 10 States, Screenshots & Accessibility are 100% compliant.\x1b[0m",
  );
  console.log("\x1b[1m\x1b[32m  Ready for Commit & Pull Request.\x1b[0m");
  console.log(
    "\x1b[1m\x1b[32m======================================================================\x1b[0m\n",
  );
  process.exit(0);
}
