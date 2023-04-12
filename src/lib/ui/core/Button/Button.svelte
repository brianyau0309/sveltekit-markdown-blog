<script lang="ts">
	export let hoverColor = 'primary';
	export let style = '';

	import cx from 'classnames';
	import { createEventDispatcher } from 'svelte';
	import Ripple from '../Ripple/Ripple.svelte';
	import type { SvelteMouseEvent } from '../SvelteEvent';
	import { getHoverClassName } from './getHoverClassName';

	// Props
	export let type: 'button' | 'submit' = 'button';
	export let disabled = false;

	// Bindings
	let isRippling: boolean;
	let doRipple: (event: SvelteMouseEvent) => void;

	// Event Handing
	const dispatch = createEventDispatcher();
	const onClick = (event: SvelteMouseEvent) => {
		event.stopPropagation();
		dispatch('click');
		if (!isRippling) doRipple(event);
	};

	// Style
	const hoverClassName = disabled ? ['opacity-70'] : getHoverClassName(hoverColor);
</script>

<button
	class={cx(
		'relative',
		'overflow-hidden',
		'whitespace-nowrap',
		'rounded-md',
		'px-2',
		'py-1',
		...hoverClassName,
		$$props.class
	)}
	{type}
	{style}
	{disabled}
	on:click={onClick}
>
	<Ripple bind:ripple={doRipple} bind:isRippling />
	<slot />
</button>
