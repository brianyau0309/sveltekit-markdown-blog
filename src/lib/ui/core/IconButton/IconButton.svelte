<script>
	export let Icon;
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
</script>

<button class={$$props.class ?? ''} on:click={() => dispatch('click')}>
	<svelte:component this={Icon} class="w-full, h-full" />
</button>

<style type="postcss">
	button {
		@apply rounded-full p-2;
	}
</style>
