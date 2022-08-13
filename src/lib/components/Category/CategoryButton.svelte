<script>
	export let category = '';
	export let className = '';
	import { Button } from '$lib/ui/core/Button';
	import { searchQuery } from '$stores';

	const handleClick = () => {
		const q = `category:${category}`;
		searchQuery.set(q);
	};
</script>

<Button {className} on:click={handleClick}>
	{category.toUpperCase()}
</Button>
