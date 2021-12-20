// @index('./*.svelte', (f, _) => `export { default as ${_.camelCase(f.path)} } from '${f.path}.svelte';`)
export { default as h1 } from './h1.svelte';
// @endindex
