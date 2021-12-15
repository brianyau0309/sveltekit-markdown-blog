// @index('./*', (f, _, { isDir }) => isDir ? `export * as ${_.camelCase(f.path)} from '${f.path}';` : `export { default as ${_.camelCase(f.path)} } from '${f.path}';`)
export * as dom from './dom';
export { default as formTitle } from './form-title';
export { default as formatDate } from './format-date';
export * as fp from './fp';
export { default as persistStore } from './persist-store';
export * as search from './search';
// @endindex
