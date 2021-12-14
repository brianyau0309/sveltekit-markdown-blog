<script>
	export let posts;
	import cx from 'classnames';
	import BlogCard from './BlogCard.svelte';
	import searchQueryParser from '$lib/utils/search-query-parser';
	import { searchObject } from '$lib/utils';
	import { searchQuery } from '$stores';

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
				fields: {
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
			}
		);
	}
</script>

<ul class={cx('flex', 'flex-col')}>
	{#each filteredPosts as post}
		<BlogCard {post} />
	{/each}
</ul>
