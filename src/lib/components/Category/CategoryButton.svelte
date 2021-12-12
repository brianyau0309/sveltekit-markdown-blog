<script>
	export let category;
	export let className = '';
	import { Button } from '$lib/ui/core/Button';
	import { searchQuery } from '$stores';
	import { goto } from '$app/navigation';

	const handleClick = () => {
		const q = `category:${category}`;
		const catePage = `/blog/?q=${encodeURIComponent(q)}`;
		searchQuery.set(q);
		goto(catePage, { replaceState: true });
	};
</script>

<Button {className} on:click={handleClick}>
	{category}
</Button>
