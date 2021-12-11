// @index('./*.svelte', (f, _) => `export { default as ${_.pascalCase(f.path)} } from '${f.path}.svelte';`)
export { default as TextBox } from './TextBox.svelte';
// @endindex
