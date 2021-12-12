<script>
	export let posts;
	import cx from 'classnames';
	import BlogCard from './BlogCard.svelte';
	import searchQueryParser from '$lib/utils/search-query-parser';
	import { searchObject } from '$lib/utils';
	import { searchQuery } from '$stores';

	const handleSort = (a, b) => {
		const compareRelevance = (b.relevance ?? 0) - (a.relevance ?? 0);
		if (compareRelevance !== 0) return compareRelevance;
		const aDate = a.metadata.lastUpdated ?? a.metadata.createdAt;
		const bDate = b.metadata.lastUpdated ?? b.metadata.createdAt;
		const getTime = (dateString) => new Date(dateString).getTime();
		return getTime(bDate) - getTime(aDate);
	};
	let filteredPosts = [];

	$: {
		const searchParams = searchQueryParser($searchQuery, {
			tag: true,
			category: true
		});
		filteredPosts = searchObject(
			posts.filter(({ metadata }) => !metadata.draft),
			searchParams,
			{
				all: {
					paths: [
						{ path: 'metadata.title', exact: false },
						{ path: 'metadata.description', exact: false },
						{ path: 'metadata.tags' },
						{ path: 'metadata.category' }
					]
				},
				tag: {
					paths: [{ path: 'metadata.tags' }],
					relevance: 5
				},
				category: {
					paths: [{ path: 'metadata.category' }],
					relevance: 100
				}
			}
		).sort(handleSort);
	}
</script>

<ul class={cx('flex', 'flex-col')}>
	{#each filteredPosts as post}
		<BlogCard {post} />
	{/each}
</ul>
