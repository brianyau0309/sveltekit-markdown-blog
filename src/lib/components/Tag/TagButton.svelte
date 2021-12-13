<script>
	export let tag = '';
	export let className = '';
	import { Button } from '$lib/ui/core/Button';
	import { searchQuery } from '$stores';

	const handleClick = () => {
		const q = `tag:${tag}`;
		searchQuery.set(q);
	};
</script>

<Button {className} on:click={handleClick}>
	#{tag}
</Button>
