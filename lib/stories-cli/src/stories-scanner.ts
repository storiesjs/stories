import {
  resolve,
  parse as parsePath,
  format as formatPath,
  dirname,
  relative,
  sep,
  posix,
} from 'path';

import { camelCase } from 'camel-case';
import fastGlob from 'fast-glob';

export async function makeStoryMap({
  patterns,
  outputPath,
  rootPath,
}: {
  patterns: string[]
  outputPath: string
  rootPath: string
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}): Promise<any> {
  const searchFrom = resolve(rootPath);
  const paths = (
    await fastGlob(patterns, {
      absolute: true,
      caseSensitiveMatch: false,
      ignore: ['**/node_modules/**'],
      cwd: searchFrom,
    })
  ).map(toPosixPath);

  const outputFilePath = resolve(rootPath, outputPath);
  const outputDir = dirname(outputFilePath);
  const importPaths = paths.map((path) => relative(outputDir, path));

  return { paths, searchFrom, outputFilePath, importPaths };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function pathsToModuleExports(paths: string[]): any {
  const names = new Set<string>();

  const imports = paths.map((path, i) => {
    const parsed = parsePath(path);
    const name = (() => {
      const symbolName = camelCase(parsed.name);

      if (!names.has(symbolName)) {
        return symbolName;
      }

      return `${symbolName}_${i}`;
    })();

    names.add(name);

    const importPath = `./${formatPath({
      ...parsed,
      base: undefined,
      ext: undefined,
    })}`;

    return { name, originalPath: path, importPath };
  })

  return [
    imports
      .map(({ name, importPath }) => `import * as ${name} from '${importPath}'`)
      .join(';\n'),
    '',
    'const modules = [',
    imports.map(({ name }) => `  ${name},`).join('\n'),
    '];\n',
    'export default modules;'
  ].join('\n');

  // return [
  //   imports
  //     .map(({ name, importPath }) => `import * as ${name} from '${importPath}'`)
  //     .join('\n'),
  //   '',
  //   'export {',
  //   imports.map(({ name }) => `  ${name},`).join('\n'),
  //   '}',
  // ].join('\n');
}

function toPosixPath(fpath: string) {
  return fpath.split(sep).join(posix.sep);
}
