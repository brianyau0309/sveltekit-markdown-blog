<script lang="ts">
	import type { SvelteMouseEvent } from '../SvelteEvent';

	// Props
	export let isRippling = false;

	// State
	let rippleTop = 0;
	let rippleLeft = 0;

	// Action
	export function ripple(event: SvelteMouseEvent) {
		try {
			isRippling = true;
			rippleLeft = event.clientX - event.currentTarget.offsetLeft;
			rippleTop = event.clientY - event.currentTarget.offsetTop;
		} finally {
			setTimeout(() => (isRippling = false), 300);
		}
	}
</script>

{#if isRippling}
	<span class="ripple" style="top: {rippleTop}px; left: {rippleLeft}px;" />
{/if}

<style lang="postcss">
	.ripple {
		@apply absolute -ml-12 -mt-12 h-24 w-24 rounded-full bg-primary bg-opacity-100 opacity-0 dark:bg-gray-500;
		animation: ripple 1s;
	}
	@keyframes ripple {
		from {
			transform: scale(0);
			opacity: 0.6;
		}
		to {
			transform: scale(10);
			opacity: 0;
		}
	}
</style>
