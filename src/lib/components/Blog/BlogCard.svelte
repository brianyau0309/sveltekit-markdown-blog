<script>
	export let post;
	import cx from 'classnames';
	import { formatDate as fd, curry } from '$utils';
	import { TagList } from '$lib/components/Tag';

	const formatDate = curry(fd)('YYYY-MM-DD', 'MMM DD YYYY');
</script>

<li class={cx('my-3', 'lg:my-5')}>
	<div class={cx('text-2xl', 'lg:text-3xl', 'underline')}>
		<a href={`blog/${post.path.replace('.md', '')}`}>{post.metadata.title}</a>
	</div>
	<!-- Rewrite: Can modulize with other date component e.g. BlogCover -->
	<div class={cx('text-base', 'my-2')}>
		{post.metadata.lastUpdated
			? `Last Updated ${formatDate(post.metadata.lastUpdated)}`
			: `Published ${formatDate(post.metadata.createdAt)}`}
	</div>
	<TagList
		tags={post.metadata.tags}
		scroll={false}
		tagClassName={cx('mr-1', 'mb-1', 'text-xs')}
	/>
</li>
