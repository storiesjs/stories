import {
  resolve,
  dirname,
  relative,
  sep,
  posix,
} from 'path';

import fastGlob from 'fast-glob';

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type ScanInput = {
  rootPath: string;
  patterns: string[];
  outputPath: string;
  ignorePaths: string[];
};

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type ScanResult = {
  paths: string[];
  searchFrom: string;
  outputFilePath: string;
  importPaths: string[];
};

export async function runOnce({
  rootPath,
  patterns,
  outputPath,
  ignorePaths
}: ScanInput): Promise<ScanResult> {
  const searchFrom = resolve(rootPath);
  const paths = (
    await fastGlob(patterns, {
      absolute: true,
      caseSensitiveMatch: false,
      ignore: ignorePaths,
      cwd: searchFrom,
    })
  ).map(toPosixPath);

  const outputFilePath = resolve(rootPath, outputPath);
  const outputDir = dirname(outputFilePath);
  const importPaths = paths.map((path) => relative(outputDir, path));

  return { paths, searchFrom, outputFilePath, importPaths };
}

function toPosixPath(fpath: string) {
  return fpath.split(sep).join(posix.sep);
}
