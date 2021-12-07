<script>
	export let blogContent;
	import cx from 'classnames';
</script>

<div
	bind:this={blogContent}
	class={cx(
		'p-10',
		'lg:py-60',
		'lg:px-72',
		'text-lg',
		'lg:text-xl',
		'break-words'
	)}
>
	<slot />
</div>
