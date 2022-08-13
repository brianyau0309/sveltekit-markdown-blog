<script context="module">
	const allPosts = import.meta.glob('./blog/*.md');
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
	import { formTitle } from '$lib/utils';
	import { BlogList } from '$components/Blog';
	import { SearchBox } from '$components/SearchBox';
</script>

<svelte:head>
	<title>{formTitle('Blog')}</title>
</svelte:head>

<div class="mx-8 lg:w-1/2 lg:m-auto flex-grow">
	<SearchBox className="my-2" />
	<BlogList {posts} />
	<slot />
</div>
