<script>
	export let category = '';
	export let className = '';
	import { Button } from '$lib/ui/core/Button';
	import { searchQuery } from '$stores';

	const handleClick = () => {
		searchQuery.set(`category:${category}`, { force: true });
	};
</script>

<Button {className} on:click={handleClick}>
	{category.toUpperCase()}
</Button>
