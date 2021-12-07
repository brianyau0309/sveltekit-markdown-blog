<script>
	import cx from 'classnames';
	export let className = '';
</script>

<div
	class={cx(
		'absolute',
		'from-transparent',
		'to-primary',
		'dark:to-darkMode-primary',
		'no-select',
		className
	)}
>
	&nbsp;
</div>
