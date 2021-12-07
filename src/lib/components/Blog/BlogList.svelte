<script>
	export let posts;
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
</script>

<ul class={cx('flex', 'flex-col', 'mx-8', 'lg:w-1/2', 'lg:m-auto')}>
	{#each filteredPosts as post}
		<BlogCard {post} />
	{/each}
</ul>
