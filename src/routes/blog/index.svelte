<script context="module">
	const allPosts = import.meta.glob('./*.md');
	export const load = async () => {
		const posts = await Promise.all(
			Object.keys(allPosts).map((path) =>
				allPosts[path]().then(({ metadata }) => ({ path, metadata }))
			)
		);
		return { props: { posts } };
	};
</script>

<script>
	export let posts;
	import cx from 'classnames';
	import { BlogList } from '$lib/components/Blog';
	import { formTitle } from '$lib/utils';
	import SearchBox from '$lib/components/SearchBox/SearchBox.svelte';
	import { onMount } from 'svelte';
	import { searchQuery } from '$stores';
	import { page } from '$app/stores';

	// FIXME: History problem related?
	onMount(() => {
		$searchQuery = $page.query.get('q');
	});
</script>

<svelte:head>
	<title>{formTitle('Blog')}</title>
</svelte:head>

<div class={cx('mx-8', 'lg:w-1/2', 'lg:m-auto')}>
	<SearchBox className="my-2" />
	<BlogList {posts} />
</div>
