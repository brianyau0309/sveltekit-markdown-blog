<script>
	export let category;
	export let createdAt;
	export let lastUpdated;
	import { cx } from '$cx';
	import { CategoryButton } from '$components/Category';
	import { BlogDate } from '$components/Blog';
</script>

<div
	class={cx(
		'flex',
		'flex-col',
		'justify-items-center',
		'lg:flex-row',
		'lg:justify-between',
		'lg:my-3',
		'px-10',
		'lg:px-24',
		'text-2xl',
		'lg:text-4xl',
		$$props.class
	)}
>
	<CategoryButton class={cx('py-2', 'mb-2')} {category} />

	<BlogDate class="text-center" {...{ lastUpdated, createdAt }} />
</div>
