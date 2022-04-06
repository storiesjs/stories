/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import { Component } from 'vue';

// function getType(fn: any) {
//   const match = fn && fn.toString().match(/^\s*function (\w+)/);
//   return match ? match[1] : '';
// }

// // https://github.com/vuejs/vue/blob/dev/src/core/util/props.js#L92
// function resolveDefault({ type, default: def }: any) {
//   if (typeof def === 'function' && getType(type) !== 'Function') {
//     // known limitation: we don't have the component instance to pass
//     return def.call();
//   }

//   return def;
// }

// export function extractProps(component: Component): any {
//   // this options business seems not good according to the types
//   return Object.entries((component as any).options.props || {})
//     .map(([name, prop]) => ({ [name]: resolveDefault(prop) }))
//     .reduce((wrap, prop) => ({ ...wrap, ...prop }), {});
// }

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