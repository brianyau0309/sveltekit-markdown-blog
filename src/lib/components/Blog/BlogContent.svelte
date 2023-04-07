<script>
	export let blogContentRef = undefined;
	export let description = '';
	import cx from 'classnames';
	import BlogDescription from './BlogDescription.svelte';
</script>

<div
	bind:this={blogContentRef}
	class={cx('p-8', 'lg:px-72', 'text-base', 'font-light', 'lg:text-lg', 'min-h-screen')}
>
	<BlogDescription {description} />
	<div
		class="lg:prose:lg prose prose-sm max-w-none overflow-x-clip dark:prose-invert md:prose-base"
	>
		<slot />
	</div>
</div>
