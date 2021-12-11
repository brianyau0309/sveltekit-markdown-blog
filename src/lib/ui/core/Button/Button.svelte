<script>
	export let className = '';
	import { createEventDispatcher } from 'svelte';
	import cx from 'classnames';
	const dispatch = createEventDispatcher();
</script>

<button
	class={cx('hover:bg-scolor', 'hover:text-scolor', className)}
	on:click={(e) => {
		e.stopPropagation();
		dispatch('click')
	}}
>
	<slot />
</button>

<style type="postcss">
	button {
		@apply py-1 px-2 rounded-md whitespace-nowrap;
	}
</style>
