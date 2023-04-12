<script>
	export let post;
	import { cx } from '$cx';
	import { slide } from 'svelte/transition';
	import { TagList } from '$components/Tag';
	import { CategoryButton } from '$components/Category';
	import { BlogDate } from '$components/Blog';
</script>

<li class={cx('my-3', 'lg:my-5')} in:slide out:slide|local>
	<div class={cx('text-xl', 'lg:text-2xl', 'underline')}>
		<a href={`/${post.path}`}>{post.metadata.title}</a>
	</div>

	<BlogDate
		class={cx('text-base', 'my-2')}
		lastUpdated={post.metadata.lastUpdated}
		createdAt={post.metadata.createdAt}
	/>

	<div class="flex">
		<CategoryButton class={cx('mr-1', 'text-xs')} category={post.metadata.category} />

		<TagList tags={post.metadata.tags} tagClass="text-xs" />
	</div>
</li>
