<script>
	export let className = '';
	export let hoverColor = 'primary';
	export let style = {};

	import cx from 'classnames';
	import { createEventDispatcher } from 'svelte';
	import { getHoverClassName } from './getHoverClassName';
	import Ripple from '../Ripple/Ripple.svelte';

	// Bindings
	let isRippling;
	let doRipple;

	// Event Handing
	const dispatch = createEventDispatcher();
	const onClick = (e) => {
		e.stopPropagation();
		dispatch('click');
		if (!isRippling) doRipple(event);
	};

	// Style
	const hoverClassName = getHoverClassName(hoverColor);
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
		className
	)}
	{style}
	on:click={onClick}
>
	<Ripple bind:ripple={doRipple} bind:isRippling />
	<slot />
</button>
