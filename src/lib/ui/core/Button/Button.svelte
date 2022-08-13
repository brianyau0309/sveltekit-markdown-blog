<script>
	export let className = '';
	export let hoverColor = 'primary';
	import cx from 'classnames';
	import { createEventDispatcher } from 'svelte';
	import { getHoverClassName } from './getHoverClassName';
	const dispatch = createEventDispatcher();
	const hoverClassName = getHoverClassName(hoverColor);
</script>

<button
	class={cx(...hoverClassName, className)}
	on:click={(e) => {
		e.stopPropagation();
		dispatch('click');
	}}
>
	<slot />
</button>

<style type="postcss">
	button {
		@apply py-1 px-2 rounded-md whitespace-nowrap;
	}
</style>
