<script>
	export let category = '';
	import { cx } from '$cx';
	import { Button } from '$lib/ui/core/Button';
	import { searchQuery } from '$stores';

	const handleClick = () => {
		searchQuery.set(`category:${category}`, { force: true });
	};
</script>

<Button
	class={cx(
		'text-secondary',
		'bg-category',
		`hack-bg-category-${String(category).toLowerCase()}`,
		$$props.class ?? ''
	)}
	on:click={handleClick}
>
	{category.toUpperCase()}
</Button>
