<script>
	export let className = '';
	export let category;
	export let createdAt;
	export let lastUpdated;
	import cx from 'classnames';
	import { CategoryButton } from '$components/Category';
	import { BlogDate } from '$components/Blog';
</script>

<div class={className}>
	<CategoryButton
		className={cx(
			'mb-2',
			'text-secondary',
			'hover:bg-scolor',
			'bg-category',
			`bg-cate-${String(category).toLowerCase()}`
		)}
		{category}
	/>

	<BlogDate className="text-center" {...{ lastUpdated, createdAt }} />
</div>

<style type="postcss">
	div {
		@apply flex flex-col justify-items-center lg:flex-row lg:justify-between lg:my-3 px-10 lg:px-24 text-2xl lg:text-4xl;
	}
</style>
