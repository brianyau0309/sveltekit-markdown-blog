<script>
	export let tag;
	export let className = '';
	import { Button } from '$lib/ui/core/Button';

	const handleClick = (e) => {
		console.log(`tags:${tag}`);
	};
</script>

<Button {className} on:click={handleClick}>
	#{tag}
</Button>
