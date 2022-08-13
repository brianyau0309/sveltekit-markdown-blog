<script>
	export let post;
	import cx from 'classnames';
	import { slide } from 'svelte/transition';
	import { TagList } from '$components/Tag';
	import { CategoryButton } from '$components/Category';
	import { BlogDate } from '$components/Blog';
</script>

<li class={cx('my-3', 'lg:my-5')} in:slide out:slide>
	<div class={cx('text-xl', 'lg:text-2xl', 'underline')}>
		<a href={`/${post.path.replace('.md', '')}`}>{post.metadata.title}</a>
	</div>

	<BlogDate
		className={cx('text-base', 'my-2')}
		lastUpdated={post.metadata.lastUpdated}
		createdAt={post.metadata.createdAt}
	/>

	<div class="flex">
		<CategoryButton
			className={cx(
				'mr-1',
				'text-xs',
				'text-secondary',
				'hover:bg-secondary-with-dark',
				'bg-category',
				`bg-cate-${String(post.metadata.category).toLowerCase()}`
			)}
			category={post.metadata.category}
		/>

		<TagList tags={post.metadata.tags} tagClassName="text-xs" />
	</div>
</li>
