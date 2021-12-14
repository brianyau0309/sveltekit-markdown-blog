<script>
	export let draft;
	if (draft) throw new Error('It is a draft');
	/* TODO: build error page */

	export let title;
	export let category;
	export let createdAt;
	export let lastUpdated;
	export let tags;
	export let layout;
	import { onMount } from 'svelte';
	import { formTitle } from '$lib/utils';
	import { BlogCover, BlogContent } from '$lib/components/Blog';

	if (layout !== 'blog') throw new Error('not a blog.');

	let blogCover;
	let blogContent;
	onMount(() => blogCover.scrollIntoView());
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
		<slot />
	</BlogContent>
</div>
