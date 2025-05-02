#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);

if (args.length === 0) {
  console.error("❌ Please provide a project name.");
  process.exit(1);
}

const projectName = args[0];
const destPath = path.resolve(process.cwd(), projectName);
const appPath = path.resolve(__dirname, './node_modules/api-whisperer/build/browser');
const thirdPartyPath = path.resolve(__dirname, './node_modules/api-whisperer/build/3rdpartylicenses.txt');
const configFilePath = path.resolve(__dirname, './config.json');
const dockerPath = path.resolve(__dirname, './docker');
const dockerFilePath = path.resolve(__dirname, './Dockerfile');
const dockerComposePath = path.resolve(__dirname, './docker-compose.yml');
const licenseFilePath = path.resolve(__dirname, './LICENSE.txt');
const readmeFilePath = path.resolve(__dirname, './README.md');


if (fs.existsSync(destPath)) {
  console.error(`❌ Directory "${projectName}" already exists.`);
  process.exit(1);
}

try {
  fs.copySync(appPath, destPath + '/app');
  fs.copySync(dockerPath, destPath + '/docker');
  fs.copyFileSync(thirdPartyPath, path.join(destPath + '/app', '3rdpartylicenses.txt'));
  fs.copyFileSync(configFilePath, path.join(destPath, 'config.json'));
  fs.copyFileSync(dockerFilePath , path.join(destPath, 'Dockerfile'));
  fs.copyFileSync(dockerComposePath, path.join(destPath, 'docker-compose.yml'));
  fs.copyFileSync(licenseFilePath, path.join(destPath, 'LICENSE.txt'));
  fs.copyFileSync(readmeFilePath, path.join(destPath, 'README.md'));
  console.log(`✅ Created new app in "${projectName}"`);
} catch (err) {
  console.error("❌ Error copying template:", err);
  process.exit(1);
}