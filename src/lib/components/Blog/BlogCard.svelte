<script>
	export let post;
	import cx from 'classnames';
	import { formatDate as fd, curry } from '$utils';
	import { TagList } from '$lib/components/Tag';
	import Button from '$lib/ui/core/Button/Button.svelte';

	const formatDate = curry(fd)('YYYY-MM-DD', 'MMM DD YYYY');
</script>

<li class={cx('my-3', 'lg:my-5')}>
	<div class={cx('text-xl', 'lg:text-2xl', 'underline')}>
		<a href={`blog/${post.path.replace('.md', '')}`}>{post.metadata.title}</a>
	</div>
	<!-- Rewrite: Can modulize with other date component e.g. BlogCover -->
	<div class={cx('text-base', 'my-2')}>
		{post.metadata.lastUpdated
			? `Last Updated ${formatDate(post.metadata.lastUpdated)}`
			: `Published ${formatDate(post.metadata.createdAt)}`}
	</div>

	<!-- Reminder: Take out and rebuild this part -->
	<div class="flex">
		<Button
			className={cx(
				'mr-1',
				'text-xs',
				'text-secondary',
				'bg-category',
				'hover:bg-scolor',
				`bg-cate-${String(post.metadata.category).toLowerCase()}`
			)}
		>
			{post.metadata.category}
		</Button>

		<TagList tags={post.metadata.tags} tagClassName="text-xs" />
	</div>
</li>
