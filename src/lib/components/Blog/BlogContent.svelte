<script>
	export let blogContent = undefined;
	import cx from 'classnames';
</script>

<div
	bind:this={blogContent}
	class={cx(
		'px-10',
		'lg:px-64',
		'text-base',
		'font-light',
		'lg:text-lg',
		'break-words'
	)}
>
	<slot />
</div>
