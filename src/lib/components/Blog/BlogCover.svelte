<script>
	export let title,
		author,
		createdAt,
		lastUpdated,
		tags,
		blogContent,
		blogCover;

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
	<BlogInfo {author} {createdAt} {lastUpdated} />

	<!-- Tags -->
	<TagList
		{tags}
		className={cx(
			'lg:justify-end',
			'px-10',
			'lg:px-24',
			'mt-3',
			'mb-10',
			'lg:mb-14',
			'font-medium'
		)}
		tagClassName={cx('mr-1.5', 'lg:mr-0', 'lg:ml-2', 'text-sm', 'lg:text-lg')}
		lBlur={cx('text-3xl', 'left-0', 'bg-gradient-to-l', 'w-8')}
		rBlur={cx('text-3xl', 'right-0', 'bg-gradient-to-r', 'w-12')}
	/>
</div>
