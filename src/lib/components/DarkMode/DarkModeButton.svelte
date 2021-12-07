<script>
	import { darkMode } from '$stores';
	import cx from 'classnames';
	import ThemeMode from '$assets/icons/theme-light-dark.svelte';
</script>

<button class={cx('fixed', 'top-6', 'right-6')} on:click={darkMode.toggle}>
	<ThemeMode
		className={cx(
			'w-10',
			'h-10',
			'p-2',
			'rounded-full',
			'bg-color-secondary',
			'text-color-secondary'
		)}
	/>
</button>
