<script>
	import { DarkModeButton } from '$components/DarkMode';
	import Nav from '$components/Nav.svelte';
	import { cx } from '$cx';
	import './css/app.css';
	import './css/google-font-raleway.css';
	import './css/prism-vsc-dark-plus.css';

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
	<footer class={cx('mt-12', 'mb-4', 'text-center')}>
		©{year}
		{title}
	</footer>
</div>
