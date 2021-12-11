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

	let searchQuery = null;
</script>

<svelte:head>
	<title>{formTitle('Blog')}</title>
</svelte:head>

<div class={cx('mx-8', 'lg:w-1/2', 'lg:m-auto')}>
	<SearchBox bind:searchQuery className="my-2" />
	<BlogList {searchQuery} {posts} />
</div>
