#!/usr/bin/env node

import { writeFileSync } from 'fs';

import Yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import { makeStoryMap, pathsToModuleExports } from './stories-scanner';

const argv = Yargs(hideBin(process.argv)).command(
  'makeStoryMap <patterns...>',
  'Make a story map by matching glob patterns',
  (y) => {
    return y
      .option('output', {
        describe: 'The relative path to save output.',
        default: './stories-map.js',
        type: 'string',
      })
      .option('from', {
        describe: 'The path to search from & generate imports',
        default: '<current working directory> ./',
        type: 'string',
      })
      .option('dryRun', {
        describe: 'Set this to avoid writing any files.',
        default: false,
        type: 'boolean',
      })
      .option('stream', {
        describe: 'Hide all loggin so you can pipe the content to a file',
        default: false,
        type: 'boolean',
      })
  },
).argv;

console.log('argv', argv);

const {
  dryRun: IS_DRY_RUN,
  output: OUTPUT = './stories-map.js',
  from: FROM = process.cwd(),
  stream: IS_STREAM,
  _: PATTERNS,
} = argv;

console.log('IS_DRY_RUN', IS_DRY_RUN);
console.log('OUTPUT', OUTPUT);
console.log('FROM', FROM);
console.log('IS_STREAM', IS_STREAM);
console.log('PATTERNS', PATTERNS);


// eslint-disable-next-line @typescript-eslint/no-empty-function
const log = IS_STREAM ? () => {} : console.log;

export const scan = async (): Promise<void> => {
  log(`\nMaking story map...\n`);

  if (IS_DRY_RUN) {
    log('Dry run.');
  }

  const { outputFilePath, importPaths } = await makeStoryMap({
    outputPath: OUTPUT,
    patterns: PATTERNS as string[],
    rootPath: FROM,
  });

  const text = pathsToModuleExports(importPaths);

  log(`Saving to: ${outputFilePath}`);

  if (!IS_DRY_RUN) {
    writeFileSync(outputFilePath, text, 'utf8');
    log('Saved.');
  }

  log('');

  if (IS_STREAM || IS_DRY_RUN) {
    console.log(text);
  }
};
