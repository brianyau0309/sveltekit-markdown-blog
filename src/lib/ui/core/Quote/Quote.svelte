<script>
	// TODO: build Quote component & description component
	export let text;
	export let className = '';
	import cx from 'classnames';
</script>

<blockquote class={cx(className)}>
	{text}
	<slot />
</blockquote>
