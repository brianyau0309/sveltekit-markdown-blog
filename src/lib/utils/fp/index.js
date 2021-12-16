// @index('./*', (f, _) => `export { default as ${_.camelCase(f.path)} } from '${f.path}';`)
export { default as composeWith } from './compose-with';
export { default as compose } from './compose';
export { default as curry } from './curry';
export { default as doNothing } from './do-nothing';
export { default as isObject } from './is-object';
export { default as isPromise } from './is-promise';
export { default as objectPath } from './object-path';
export { default as withPromise } from './with-promise';
// @endindex
