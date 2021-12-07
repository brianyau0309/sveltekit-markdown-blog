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
	import { BlogList } from '$lib/components/Blog';
	import { formTitle } from '$lib/utils';
</script>

<svelte:head>
	<title>{formTitle('Blog')}</title>
</svelte:head>

<div>
	<BlogList {posts} />
</div>
