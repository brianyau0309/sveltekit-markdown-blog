<script>
	export let title;
	export let category;
	export let createdAt;
	export let lastUpdated;
	export let tags;
	export let blogContent;
	export let blogCover;

	import cx from 'classnames';
	import { TagList } from '$lib/components/Tag';
	import { BlogTitle, BlogInfo } from '$lib/components/Blog';
</script>

<div
	bind:this={blogCover}
	on:click={() => blogContent.scrollIntoView({ behavior: 'smooth' })}
	class={cx('w-full', 'min-h-screen', 'font-bold', 'flex', 'flex-col')}
>
	<!-- Title -->
	<BlogTitle {title} />

	<!-- Author & Date -->
	<BlogInfo {...{ category, createdAt, lastUpdated }} />

	<!-- Tags -->
	<TagList
		className={cx(
			'mx-10',
			'lg:mx-24',
			'mt-3',
			'mb-10',
			'lg:mb-14',
			'font-medium'
		)}
		tagClassName={cx('mr-1.5', 'lg:mr-0', 'lg:ml-2', 'text-sm', 'lg:text-lg')}
		{tags}
	/>
</div>
