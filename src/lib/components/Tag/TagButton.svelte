<script>
	export let tag = '';
	export let className = '';
	import { Button } from '$lib/ui/core/Button';
	import { searchQuery } from '$stores';

	const handleClick = () => {
		searchQuery.set(`tag:${tag}`);
	};
</script>

<Button {className} on:click={handleClick}>
	#{tag}
</Button>
