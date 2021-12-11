<script>
	export let posts;
	export let searchQuery;
	import cx from 'classnames';
	import BlogCard from './BlogCard.svelte';

	const sortByDate = (a, b) => {
		const aDate = a.metadata.lastUpdated ?? a.metadata.createdAt;
		const bDate = b.metadata.lastUpdated ?? b.metadata.createdAt;
		const getTime = (dateString) => new Date(dateString).getTime();
		return getTime(bDate) - getTime(aDate);
	};
	const filteredPosts = posts
		.filter(({ metadata }) => !metadata.draft)
		.sort(sortByDate);

	/* Reminder: build searchQuery parser, filter post, slice post and infinite scroll */
	$: console.log(searchQuery);
</script>

<ul class={cx('flex', 'flex-col')}>
	{#each filteredPosts as post}
		<BlogCard {post} />
	{/each}
</ul>
