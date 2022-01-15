import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import { version }from '../package.json';

const DRY_RUN = false;
const QUITE = false;
const FROM = process.cwd();
const OUTPUT = './stories-list.js';
const SEARCH = [ '**/*.stories.tsx', '**/*.stories.ts', '**/*.stories.jsx', '**/*.stories.js' ];

function getSearch(_: string[]): string[] {
  return _.length > 0 ? _ : SEARCH;
}

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type ArgvType = {
    dryRun: boolean;
    quiet: boolean;
    from: string;
    output: string;
    _: string[];
};

const args = yargs(hideBin(process.argv))
.command(
  'scan',
  'Search and save list of stories in file',
  (y) => {
    return y
      .option('output', {
        describe: 'The relative path to file to save output.',
        default: OUTPUT,
        type: 'string',
      })
      .option('from', {
        describe: 'The path to search from & generate imports',
        default: FROM,
        type: 'string',
      })
      .option('dryRun', {
        describe: 'Set this to avoid writing any files.',
        default: DRY_RUN,
        type: 'boolean',
      })
      .option('quiet', {
        describe: 'Hide all logs',
        default: QUITE,
        type: 'boolean',
      })
      .option('_', {
        describe: 'Search patterns',
        default: SEARCH,
        type: 'string',
      })
  },
)
.example('$0 **/*.stories.tsx', 'Search by pattern')
.example('$0 --from ./src', 'Search in folder and all subfolders')
.example('$0 --output ./stories-list.js', 'Save output stories list in file')
.example('$0 --dryRun', 'Run but do not save output')
.example('$0 --quiet', 'Suppress logs messages')
.version('version', version as string)
.argv as ArgvType;

export const options = {
    dryRun: args.dryRun || DRY_RUN,
    quiet: args.quiet || QUITE,
    from: args.from || FROM,
    output: args.output || OUTPUT,
    search: getSearch(args._)
};
