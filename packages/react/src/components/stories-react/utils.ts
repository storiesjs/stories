/* eslint-disable @typescript-eslint/array-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Performs a rest spread on an object.
 *
 * @param source The source value.
 * @param propertyNames The property names excluded from the rest spread.
 */
export function rest(source: any, propertyNames: (string | symbol)[]): any {
  const result: any = {};
  for (const p in source) if (Object.prototype.hasOwnProperty.call(source, p) && propertyNames.indexOf(p) < 0)
    result[p] = source[p];
  if (source != null && typeof Object.getOwnPropertySymbols === "function")
    for (let i = 0, p = Object.getOwnPropertySymbols(source); i < p.length; i++) {
      if (propertyNames.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(source, p[i]))
        result[p[i]] = source[p[i]];
    }
  return result;
}