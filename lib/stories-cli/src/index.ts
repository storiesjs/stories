#!/usr/bin/env node

import { writeFileSync } from 'fs';

import { options } from './command';
import { generateOutput } from './generator';
import { logger } from './logger';
import { runOnce } from './runner';

const ignorePaths = ['**/node_modules/**'];
const log = logger(options.dryRun);

export const scanOnce = async (): Promise<void> => {
  log(`\nLoooking stories in ${options.from}`);
  log(`Search patterns are ${options.search}\n`);

  if (options.dryRun) {
    log('Dry run.');
  }

  const { outputFilePath, importPaths } = await runOnce({
    rootPath: options.from,
    patterns: options.search,
    outputPath: options.output,
    ignorePaths
  });

  log(`Saving to: ${outputFilePath}`);

  const output = generateOutput(importPaths);

  if (!options.dryRun) {
    writeFileSync(outputFilePath, output, 'utf8');
    log('Saved.');
  }

  log('');

  if (options.quiet || options.dryRun) {
    console.log(output);
  }
};
