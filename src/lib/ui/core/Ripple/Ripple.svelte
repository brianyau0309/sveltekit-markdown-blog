<script>
	// Props
	export let isRippling = false;

	// State
	let rippleTop = 0;
	let rippleLeft = 0;

	// Action
	export function ripple(event) {
		try {
			isRippling = true;
			rippleLeft = event.clientX - event.currentTarget.offsetLeft;
			rippleTop = event.clientY - event.currentTarget.offsetTop;
		} finally {
			setTimeout(() => (isRippling = false), 350);
		}
	}
</script>

{#if isRippling}
	<span class="ripple" style="top: {rippleTop}px; left: {rippleLeft}px;" />
{/if}

<style lang="postcss">
	.ripple {
		@apply absolute -ml-12 -mt-12 h-24 w-24 rounded-full bg-primary bg-opacity-20 opacity-0 dark:bg-gray-400;
		animation: ripple 1s;
	}
	@keyframes ripple {
		from {
			transform: scale(0);
			opacity: 1;
		}
		to {
			transform: scale(10);
			opacity: 0;
		}
	}
</style>
