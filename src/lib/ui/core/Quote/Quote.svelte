<script>
	export let text;
	export let className = '';
	import cx from 'classnames';
</script>

<blockquote class={cx('border-primary-darkMode', className)}>
	{text}
	<slot />
</blockquote>

<style type="postcss">
	blockquote {
		padding-left: 1em;
		border-left: 0.2em solid;
		font-weight: 500;
	}
</style>
