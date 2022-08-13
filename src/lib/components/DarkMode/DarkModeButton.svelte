<script>
	import { darkMode } from '$stores';
	import cx from 'classnames';
	import Button from '$lib/ui/core/Button/Button.svelte';
</script>

<Button
	className={cx(
		'fixed',
		'text-xs',
		'top-7',
		'right-7',
		'w-26',
		'h-8',
		'bg-secondary-with-dark',
		'text-secondary-with-dark'
	)}
	hoverColor="opacity"
	on:click={darkMode.toggle}
>
	{$darkMode?.active ? 'LightMode' : 'DarkMode'}
</Button>
