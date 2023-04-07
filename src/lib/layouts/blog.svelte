<script context="module">
	export { h1 } from './components';
</script>

<script>
	import { onMount } from 'svelte';
	import { formTitle } from '$utils';
	import { BlogCover, BlogContent } from '$components/Blog';

	export let draft;
	if (draft) throw new Error('It is a draft');

	export let title;
	export let category;
	export let createdAt;
	export let lastUpdated = undefined;
	export let tags;
	export let layout;
	export let description = '';
	export let data;
	export let form;

	// For avoiding unused variables warning
	data || form;

	if (layout !== 'blog') throw new Error('not a blog.');

	let blogCoverRef;
	let blogContentRef;
	onMount(() => setTimeout(() => blogCoverRef.scrollIntoView(), 0));
</script>

<svelte:head>
	<title>{formTitle(title)}</title>
</svelte:head>

<div>
	<BlogCover
		bind:blogCoverRef
		{...{ blogContentRef, title, category, createdAt, lastUpdated, tags }}
	/>

	<BlogContent bind:blogContentRef {description}>
		<slot />
	</BlogContent>
</div>
