<script>
	export let Icon;
	export let className;
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
</script>

<button class={className} on:click={() => dispatch('click')}>
	<svelte:component this={Icon} className="w-full, h-full" />
</button>

<style type="postcss">
	button {
		@apply rounded-full p-2;
	}
</style>
