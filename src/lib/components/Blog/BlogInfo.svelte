<script>
	export let className = '';
	export let category;
	export let createdAt;
	export let lastUpdated;
	import cx from 'classnames';
	import { CategoryButton } from '$components/Category';
	import { BlogDate } from '$components/Blog';
</script>

<div class={cx('blog-info', className)}>
	<CategoryButton
		className={cx(
			'mb-2',
			'text-secondary',
			'hover:bg-secondary-with-dark',
			'bg-category',
			`bg-cate-${String(category).toLowerCase()}`
		)}
		{category}
	/>

	<BlogDate className="text-center" {...{ lastUpdated, createdAt }} />
</div>
