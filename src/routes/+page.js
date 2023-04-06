export const prerender = true;

const allPosts = import.meta.glob('./blog/**/*.md');
export const load = async () => ({
	posts: await Promise.all(
		Object.keys(allPosts).map(async (path) => {
			const { metadata } = await allPosts[path]();
			return { path: path.replace('/+page.md', ''), metadata };
		})
	)
});
