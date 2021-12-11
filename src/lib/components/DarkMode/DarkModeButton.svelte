<script>
	import { darkMode } from '$stores';
	import cx from 'classnames';
	import ThemeMode from '$assets/icons/theme-light-dark.svelte';
	import { IconButton } from '$lib/ui/core/IconButton';
</script>

<IconButton
	className={cx('fixed', 'top-5', 'right-5', 'w-12', 'h-12')}
	Icon={ThemeMode}
	on:click={darkMode.toggle}
/>
