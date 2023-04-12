<script>
	export let text;
	import cx from 'classnames';
</script>

<blockquote class={cx('border-primary-darkMode', $$props.class)}>
	{text}
	<slot />
</blockquote>

<style type="postcss">
	blockquote {
		border-left: 0.2em solid;
		padding-left: 1em;
		font-weight: 500;
	}
</style>
