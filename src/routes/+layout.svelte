<script>
	import cx from 'classnames';
	import '$lib/css/google-font-raleway.css';
	import '$lib/css/prism-vsc-dark-plus.css';
	import '../app.css';
	import { DarkModeButton } from '$lib/components/DarkMode';
	import Nav from '$lib/components/Nav.svelte';

	const year = new Date().getFullYear();
	const title = import.meta.env.VITE_TITLE_PREFIX;
</script>

<div
	class={cx(
		'w-screen',
		'min-h-screen',
		'flex',
		'flex-col',
		'text-primary-with-dark',
		'bg-primary-with-dark'
	)}
>
	<Nav />
	<DarkModeButton />
	<slot />
	<footer class={cx('p-2', 'text-center')}>
		©{year}
		{title}
	</footer>
</div>
