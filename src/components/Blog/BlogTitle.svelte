<script>
	import { fade } from 'svelte/transition';
	import { cx } from '$cx';
	export let title = '';
</script>

<div
	in:fade
	class={cx(
		'flex',
		'grow',
		'items-center',
		'justify-center',
		'text-5xl',
		'leading-tight',
		'lg:text-9xl',
		'lg:text-center',
		'px-10',
		$$props.class
	)}
>
	{title}
</div>
