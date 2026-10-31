#!/usr/bin/env node
import { readFile } from 'node:fs/promises';

const args = process.argv.slice(2);

if (args.includes('--version')) {
  console.log('0.3.0');
  process.exit(0);
}

const indent = Number(args[args.indexOf('--indent') + 1]) || 2;
const file = args.find(arg => arg.endsWith('.json'));
const input = file ? await readFile(file, 'utf8') : await readStdin();
let data = JSON.parse(input.replace(/,\s*([}\]])/g, '$1'));
if (args.includes('--sort')) data = sortKeys(data);
const output = JSON.stringify(data, null, indent);

if (args.includes('--check')) process.exit(output === input.trim() ? 0 : 1);
console.log(output);

function sortKeys(value) {
  if (Array.isArray(value)) return value.map(sortKeys);
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value)
        .toSorted(([a], [b]) => a.localeCompare(b))
        .map(([key, child]) => [key, sortKeys(child)]),
    );
  }
  return value;
}

async function readStdin() {
  let text = '';
  for await (const chunk of process.stdin) text += chunk;
  return text;
}
