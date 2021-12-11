<script>
	export let className = '';
	export let category;
	export let createdAt;
	export let lastUpdated;

	import cx from 'classnames';
	import { formatDate as fd, curry } from '$utils';
	import Button from '$lib/ui/core/Button/Button.svelte';

	const formatDate = curry(fd)('YYYY-MM-DD', 'MMM DD YYYY');
</script>

<div
	class={cx(
		'flex',
		'flex-col',
		'lg:flex-row',
		'justify-between',
		'lg:my-3',
		'px-10',
		'lg:px-24',
		'text-2xl',
		'lg:text-4xl',
		className
	)}
>
	<!-- Reminder: rebuild into a component -->
	<Button
		className={cx(
			'text-secondary',
			'bg-category',
			`bg-cate-${String(category).toLowerCase()}`
		)}
	>
		{category}
	</Button>

	<div>
		<span>{lastUpdated ? 'Last Updated ' : 'Published '}</span>
		<span>
			{lastUpdated ? formatDate(lastUpdated) : formatDate(createdAt)}
		</span>
	</div>
</div>
