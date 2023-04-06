<script>
	export let title;
	export let category;
	export let createdAt;
	export let lastUpdated;
	export let tags;
	export let blogContent = undefined;
	export let blogCover = undefined;

	import cx from 'classnames';
	import { TagList } from '$lib/components/Tag';
	import { BlogTitle, BlogInfo } from '$lib/components/Blog';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	bind:this={blogCover}
	on:click={() => blogContent.scrollIntoView({ behavior: 'smooth' })}
	class={cx('w-full', 'min-h-screen', 'font-bold', 'flex', 'flex-col')}
>
	<BlogTitle {title} />

	<BlogInfo {...{ category, createdAt, lastUpdated }} />

	<TagList
		className={cx('mx-10', 'lg:mx-24', 'mt-2', 'mb-10', 'lg:mb-14', 'font-medium')}
		tagClassName={cx('text-sm', 'lg:text-lg')}
		{tags}
	/>
</div>
