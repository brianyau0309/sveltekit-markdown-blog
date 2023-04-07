<script>
	import { darkMode } from '$stores';
	import cx from 'classnames';
	import Button from '$lib/ui/core/Button/Button.svelte';
</script>

<Button
	className={cx(
		'text-xs',
		'top-7',
		'right-7',
		'w-26',
		'h-8',
		'bg-secondary-with-dark',
		'text-secondary-with-dark'
	)}
	style="position: fixed !important"
	hoverColor="opacity"
	on:click={darkMode.toggle}
>
	{$darkMode?.active ? 'LightMode' : 'DarkMode'}
</Button>
