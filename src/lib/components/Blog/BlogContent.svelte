<script>
	export let blogContent = undefined;
	export let description = '';
	import cx from 'classnames';
	import BlogDescription from './BlogDescription.svelte';
</script>

<div
	bind:this={blogContent}
	class={cx('p-8', 'lg:px-72', 'text-base', 'font-light', 'lg:text-lg', 'min-h-screen')}
>
	<BlogDescription {description} />
	<div
		class="prose dark:prose-invert max-w-none prose-sm md:prose-base lg:prose:lg overflow-x-clip"
	>
		<slot />
	</div>
</div>
