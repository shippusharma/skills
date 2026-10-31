#!/usr/bin/env node
// Lists, validates, and versions the skills in this repository.
//
//   node scripts/skills.mjs list           print every skill with its version and description
//   node scripts/skills.mjs validate       check skills against the Agent Skills spec and repo rules
//   node scripts/skills.mjs sync-version   copy package.json's version into the plugin manifests

import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { basename, dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'yaml';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SKILLS_DIR = join(ROOT, 'skills');
const PLUGIN_MANIFESTS = ['.claude-plugin/plugin.json', '.codex-plugin/plugin.json'];

// Rules from https://agentskills.io/specification
const NAME_PATTERN = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const SPEC_FIELDS = [
  'name',
  'description',
  'license',
  'compatibility',
  'metadata',
  'allowed-tools',
];

const isString = value => typeof value === 'string';
const isMapping = value => Object.prototype.toString.call(value) === '[object Object]';
const readJson = path => JSON.parse(readFileSync(join(ROOT, path), 'utf8'));

function skillDirs() {
  return readdirSync(SKILLS_DIR)
    .filter(entry => !entry.startsWith('.'))
    .map(entry => join(SKILLS_DIR, entry))
    .filter(path => statSync(path).isDirectory())
    .sort();
}

function loadSkill(dir) {
  const file = join(dir, 'SKILL.md');
  if (!existsSync(file)) return { dir, error: 'missing SKILL.md' };
  const source = readFileSync(file, 'utf8');
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---(\r?\n|$)/);
  if (!match)
    return { dir, error: 'SKILL.md must start with YAML frontmatter between "---" lines' };
  try {
    // YAML 1.1 is the strictest reading agents use: it also turns yes/no/on/off into booleans and dates into Dates.
    const data = parse(match[1], { version: '1.1' }) ?? {};
    if (!isMapping(data)) return { dir, error: 'frontmatter must be a YAML mapping' };
    return { dir, data, body: source.slice(match[0].length) };
  } catch (error) {
    // yaml reports positions from the start of the frontmatter, not the file.
    return {
      dir,
      error: `invalid frontmatter: ${error.message.split('\n')[0].replace(/:$/, ' of the frontmatter')}`,
    };
  }
}

function validateSkill({ dir, data, body, error }) {
  const errors = [];
  const warnings = [];
  if (error) return { errors: [error], warnings };
  const { name, description, compatibility, metadata } = data;

  for (const key of Object.keys(data)) {
    if (!SPEC_FIELDS.includes(key))
      warnings.push(`"${key}" is not a spec field, so other agents may ignore it`);
  }
  for (const key of ['license', 'compatibility', 'allowed-tools']) {
    if (key in data && !isString(data[key])) errors.push(`${key} must be a string`);
  }

  if (!isString(name)) {
    errors.push('name is required and must be a string');
  } else {
    if (name.length > 64 || !NAME_PATTERN.test(name)) {
      errors.push(
        'name must be 1–64 characters of a-z, 0-9, and single hyphens, with no hyphen at either end',
      );
    }
    if (name !== basename(dir))
      errors.push(`name "${name}" must match its directory "${basename(dir)}"`);
  }

  if (!isString(description) || !description.trim()) {
    errors.push('description is required and must be a non-empty string');
  } else {
    if (description.length > 1024) {
      errors.push(`description is ${description.length} characters; the limit is 1024`);
    }
    if (!/\buse (it |this )?(when|for|to|if)\b/i.test(description)) {
      warnings.push('description should say when to use the skill, e.g. "Use when …"');
    }
  }

  if (isString(compatibility) && compatibility.length > 500) {
    errors.push('compatibility must be at most 500 characters');
  }

  if (metadata !== undefined) {
    if (!isMapping(metadata)) {
      errors.push('metadata must map string keys to string values');
    } else {
      for (const [key, value] of Object.entries(metadata)) {
        if (isString(value)) continue;
        const hint = Array.isArray(value) ? 'use a comma-separated string' : 'wrap it in quotes';
        errors.push(`metadata.${key} must be a string; ${hint}`);
      }
      if (!metadata.version) warnings.push('metadata.version is missing');
    }
  }

  const lines = body.split('\n').length;
  if (lines > 500) errors.push(`SKILL.md body is ${lines} lines; keep it under 500`);

  const linked = [];
  for (const target of relativeLinks(body)) {
    const path = resolve(dir, decodeURI(target));
    linked.push(path);
    if (relative(dir, path).startsWith('..')) {
      errors.push(
        `link "${target}" points outside the skill folder, which installed skills can't see`,
      );
    } else if (!existsSync(path)) {
      errors.push(`link "${target}" does not exist`);
    }
  }

  // A file is reachable when SKILL.md links to it or to a folder that contains it.
  for (const path of filesIn(dir)) {
    const file = relative(dir, path);
    if (file === 'SKILL.md' || file === 'LICENSE.txt') continue;
    if (!linked.some(target => path === target || path.startsWith(target + sep))) {
      warnings.push(`${file} is not linked from SKILL.md, so agents never read it`);
    }
  }

  return { errors, warnings };
}

function filesIn(dir) {
  return readdirSync(dir, { withFileTypes: true })
    .filter(entry => !entry.name.startsWith('.'))
    .flatMap(entry => {
      const path = join(dir, entry.name);
      return entry.isDirectory() ? filesIn(path) : [path];
    });
}

function relativeLinks(markdown) {
  // Links inside fenced code blocks are examples, not references.
  const prose = markdown.replace(/^(```|~~~)[\s\S]*?^\1/gm, '');
  return [...prose.matchAll(/\]\(([^)\s]+)/g)]
    .map(([, target]) => target.split('#')[0])
    .filter(target => target && !/^([a-z][a-z0-9+.-]*:|\/)/i.test(target));
}

function validateRepo(skills) {
  const errors = [];
  const readme = readFileSync(join(ROOT, 'README.md'), 'utf8');
  for (const { dir } of skills) {
    if (!readme.includes(basename(dir)))
      errors.push(`README.md does not list skill "${basename(dir)}"`);
  }

  const { version } = readJson('package.json');
  for (const manifest of PLUGIN_MANIFESTS) {
    const found = readJson(manifest).version;
    if (found !== version) {
      errors.push(
        `${manifest} is at ${found} but package.json is at ${version}; run "npm run sync-version"`,
      );
    }
  }
  return errors;
}

function validate() {
  const skills = skillDirs().map(loadSkill);
  let errorCount = 0;
  let warningCount = 0;
  const report = (label, { errors, warnings }) => {
    errorCount += errors.length;
    warningCount += warnings.length;
    console.log(`${errors.length ? '✗' : '✓'} ${label}`);
    for (const message of errors) console.log(`    error  ${message}`);
    for (const message of warnings) console.log(`    warn   ${message}`);
  };

  for (const skill of skills) report(basename(skill.dir), validateSkill(skill));
  report('repository', { errors: validateRepo(skills), warnings: [] });
  console.log(
    `\n${skills.length} skills checked. Errors: ${errorCount}. Warnings: ${warningCount}.`,
  );
  process.exitCode = errorCount ? 1 : 0;
}

function list() {
  const rows = skillDirs()
    .map(loadSkill)
    .map(({ dir, data = {} }) => [
      basename(dir),
      String(data.metadata?.version ?? ''),
      String(data.description ?? ''),
    ]);
  const width = Math.max(...rows.map(([name]) => name.length));
  for (const [name, version, description] of rows) {
    const summary = description.length > 80 ? `${description.slice(0, 79)}…` : description;
    console.log(`${name.padEnd(width)}  ${version.padEnd(7)}  ${summary}`);
  }
}

function syncVersion() {
  const { version } = readJson('package.json');
  for (const manifest of PLUGIN_MANIFESTS) {
    const path = join(ROOT, manifest);
    const text = readFileSync(path, 'utf8');
    if (!/"version"\s*:/.test(text)) throw new Error(`${manifest} has no "version" field`);
    // Replace in place so the file keeps its formatting.
    const updated = text.replace(/("version"\s*:\s*")[^"]*(")/, `$1${version}$2`);
    if (updated !== text) writeFileSync(path, updated);
    console.log(`${manifest}: ${version}`);
  }
}

const commands = { list, validate, 'sync-version': syncVersion };
const command = commands[process.argv[2]];
if (!command) {
  console.error('Usage: node scripts/skills.mjs <list|validate|sync-version>');
  process.exit(1);
}
command();
