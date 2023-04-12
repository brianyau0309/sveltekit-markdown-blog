<script>
	export let tag = '';
	import { Button } from '$lib/ui/core/Button';
	import { searchQuery } from '$stores';

	const handleClick = () => {
		searchQuery.set(`tag:${tag}`, { force: true });
	};
</script>

<Button class={$$props.class ?? ''} on:click={handleClick}>
	#{tag}
</Button>
