// @index('./*', (f, _) => `export { default as ${_.camelCase(f.path)} } from '${f.path}';`)
export { default as curry } from './curry';
export { default as isObject } from './is-object';
export { default as objectPath } from './object-path';
// @endindex
