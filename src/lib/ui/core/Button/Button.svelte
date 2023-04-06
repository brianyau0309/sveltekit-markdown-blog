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
	class={cx('py-1 px-2 rounded-md whitespace-nowrap', ...hoverClassName, className)}
	on:click={(e) => {
		e.stopPropagation();
		dispatch('click');
	}}
>
	<slot />
</button>
