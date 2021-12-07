<script>
	import cx from 'classnames';
	import '$lib/css/google-font-raleway.css';
	import '$lib/css/prism-vsc-dark-plus.css';
	import '../app.css';
	import { DarkModeButton } from '$lib/components/DarkMode';
	import Nav from '$lib/components/Nav.svelte';
</script>

<div
	class={cx(
		'w-screen',
		'min-h-screen',
		'text-color-primary',
		'bg-color-primary'
	)}
>
	<Nav />
	<DarkModeButton />
	<slot />
</div>
