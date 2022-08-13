<script>
	export let posts;
	import BlogCard from './BlogCard.svelte';
	import { searchEngine, searchSchema } from '$utils/search';
	import { searchQuery } from '$stores';

	let pageNumber = 1;
	$: filteredPosts = searchEngine(
		posts,
		$searchQuery,
		searchSchema(pageNumber)
	);
</script>

<ul class="flex flex-col">
	{#each filteredPosts as post (post.path)}
		<BlogCard {post} />
	{/each}
</ul>
