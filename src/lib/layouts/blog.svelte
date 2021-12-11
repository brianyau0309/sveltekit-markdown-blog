<script>
	export let draft;
	if (draft) throw new Error('It is a draft');
	/* Reminder: build error page */

	export let title;
	export let category;
	export let createdAt;
	export let lastUpdated;
	export let tags;
	import { onMount } from 'svelte';
	import { formTitle } from '$lib/utils';
	import { BlogCover, BlogContent } from '$lib/components/Blog';

	let blogCover, blogContent;
	onMount(() => blogCover.scrollIntoView());
</script>

<svelte:head>
	<title>{formTitle(title)}</title>
</svelte:head>

<div>
	<!-- Blog Cover -->
	<BlogCover
		bind:blogCover
		{...{ blogContent, title, category, createdAt, lastUpdated, tags }}
	/>

	<!-- Blog Content -->
	<BlogContent bind:blogContent>
		<slot />
	</BlogContent>
</div>
