// eslint-disable-next-line @typescript-eslint/no-empty-function
const EMPTY = () => {};

// eslint-disable-next-line @typescript-eslint/ban-types
export function logger(dryRun: boolean): Function {
    return dryRun ?  EMPTY : console.log;
}