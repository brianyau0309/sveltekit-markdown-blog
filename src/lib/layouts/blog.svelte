<script context="module">
	export { h1 } from './components';
</script>

<script>
	export let draft;
	if (draft) throw new Error('It is a draft');

	export let title;
	export let category;
	export let createdAt;
	export let lastUpdated = undefined;
	export let tags;
	export let layout;
	export let description = '';
	import { onMount } from 'svelte';
	import { formTitle } from '$utils';
	import { BlogCover, BlogContent, BlogDescription } from '$components/Blog';

	if (layout !== 'blog') throw new Error('not a blog.');

	let blogCover;
	let blogContent;
	onMount(() => setTimeout(() => blogCover.scrollIntoView(), 0));
</script>

<svelte:head>
	<title>{formTitle(title)}</title>
</svelte:head>

<div>
	<BlogCover
		bind:blogCover
		{...{ blogContent, title, category, createdAt, lastUpdated, tags }}
	/>

	<BlogContent bind:blogContent>
		<BlogDescription {description} />
		<slot />
	</BlogContent>
</div>
