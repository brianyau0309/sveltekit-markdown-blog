<script context="module">
	const allPosts = import.meta.glob('./blog/*.{md,svx}');
	const body = [];
	for (const path in allPosts) {
		body.push(
			allPosts[path]().then(({ metadata }) => {
				return { path, metadata };
			})
		);
	}

	export const load = async () => {
		const posts = await Promise.all(body);
		return {
			props: {
				posts
			}
		};
	};
</script>

<script>
	export let posts;
</script>

<svelte:head>
	<title>Home | Brian</title>
</svelte:head>

<ul>
	{#each posts as { path, metadata }}
		<a href={`${path.replace(/\.md|\.svx/, '')}`}>{metadata.title}</a>
	{/each}
</ul>
