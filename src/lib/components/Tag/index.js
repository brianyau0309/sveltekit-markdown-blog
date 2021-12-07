// @index('./*.svelte', (f, _) => `export { default as ${_.pascalCase(f.path)} } from '${f.path}.svelte';`)
export { default as TagBlur } from './TagBlur.svelte';
export { default as TagButton } from './TagButton.svelte';
export { default as TagList } from './TagList.svelte';
// @endindex
