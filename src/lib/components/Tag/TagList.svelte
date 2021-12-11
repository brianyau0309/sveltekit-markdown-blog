<script>
	export let tags;
	export let scroll = true;
	export let className = '';
	export let tagClassName = '';
	import cx from 'classnames';
	import { TagButton } from '$components/Tag';
	import { isOverflown, isScrolled } from '$lib/utils';

	let tagList;
	$: isTagListOverflown = tagList && isOverflown(tagList);
	$: isTagListScrolled = tagList && isScrolled(tagList);
</script>

<div
	bind:this={tagList}
	on:scroll={() => {
		isTagListScrolled = isScrolled(tagList);
		isTagListOverflown = isOverflown(tagList);
	}}
	class={cx(
		'flex',
		{ 'flex-wrap': !scroll },
		{ 'overflow-x-scroll': scroll },
		'items-center',
		'no-scrollbar',
		isTagListOverflown
			? isTagListScrolled
				? 'blur-edge'
				: 'blur-right-edge'
			: '',
		className
	)}
>
	{#each tags as tag}
		<TagButton className={tagClassName} {tag} />
	{/each}
</div>

<style type="postcss">
	div {
		overflow: scroll;
		white-space: nowrap;
	}

	.blur-edge {
		mask-image: linear-gradient(
			transparent,
			theme('backgroundColor.primary.DEFAULT') 10%,
			theme('backgroundColor.primary.DEFAULT') 90%,
			transparent 100%
		);

		-webkit-mask-image: linear-gradient(
			to right,
			transparent,
			theme('backgroundColor.primary.DEFAULT') 10%,
			theme('backgroundColor.primary.DEFAULT') 90%,
			transparent 100%
		);
	}

	.blur-right-edge {
		mask-image: linear-gradient(
			transparent,
			theme('backgroundColor.primary.DEFAULT') 0%,
			theme('backgroundColor.primary.DEFAULT') 90%,
			transparent 100%
		);

		-webkit-mask-image: linear-gradient(
			to right,
			transparent,
			theme('backgroundColor.primary.DEFAULT') 0%,
			theme('backgroundColor.primary.DEFAULT') 90%,
			transparent 100%
		);
	}
</style>
