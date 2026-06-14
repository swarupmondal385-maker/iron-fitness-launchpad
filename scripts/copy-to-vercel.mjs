import { cpSync, mkdirSync, rmSync, writeFileSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const vercelOutput = join(root, ".vercel", "output");

rmSync(vercelOutput, { recursive: true, force: true });

mkdirSync(join(vercelOutput, "static"), { recursive: true });
mkdirSync(join(vercelOutput, "functions", "__server.func"), { recursive: true });

cpSync(join(root, "dist", "config.json"), join(vercelOutput, "config.json"));
cpSync(join(root, "dist", "client"), join(vercelOutput, "static"), { recursive: true });
cpSync(join(root, "dist", "server"), join(vercelOutput, "functions", "__server.func"), {
  recursive: true,
});
