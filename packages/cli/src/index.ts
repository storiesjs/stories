#!/usr/bin/env node

import { writeFileSync } from 'fs';

import chokidar from 'chokidar';

import { options } from './command';
import { logger } from './logger';
import { generateOutput } from './processor';
import { runOnce } from './runner';

const ignorePaths = ['**/node_modules/**'];
const log = logger(options.dryRun);

export const scan = (): void => {
  log(`\nLooking stories in ${options.from}`);
  log(`Search patterns are ${options.search}\n`);

  if (options.dryRun) {
    log('Dry run.');
  }

  const watcherOptions = {
    cwd: options.from,
    usePolling: true,
    interval: 2000,
    binaryInterval: 2000
  };


  const watcher = chokidar.watch(options.search, watcherOptions);
  watcher
  .on('error', error => log(`Watcher error: ${error}`))
  .on("add", async (pathName: string) => await processOnce(`Added ${pathName}`))
  .on("change", async (pathName: string) => await processOnce(`Change ${pathName}`))
  .on("unlink", async (pathName: string) => await processOnce(`Removed ${pathName}`));
};

async function processOnce(cmd: string) {
  log(cmd);

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
}