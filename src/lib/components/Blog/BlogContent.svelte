<script>
	export let blogContent = undefined;
	export let description = '';
	import cx from 'classnames';
	import BlogDescription from './BlogDescription.svelte';
</script>

<div
	bind:this={blogContent}
	class={cx(
		'px-10',
		'pt-10',
		'lg:px-72',
		'text-base',
		'font-light',
		'lg:text-lg',
		'min-h-screen'
	)}
>
	<BlogDescription {description} />
	<div class="prose dark:prose-invert max-w-none lg:prose-lg">
		<slot />
	</div>
</div>
