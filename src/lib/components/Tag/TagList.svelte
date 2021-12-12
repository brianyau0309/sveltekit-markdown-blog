<script>
	export let tags;
	export let scroll = true;
	export let className = '';
	export let tagClassName = '';
	import cx from 'classnames';
	import { TagButton } from '$components/Tag';
	import { isOverflown, isScrolled, isScrollEnd } from '$lib/utils';
	import { browser } from '$app/env';

	let tagList;
	let isTagListOverflown;
	let isTagListScrolled;
	let isTagListScrollEnd;

	const checkScroll = (ele) => {
		const opts = { x: true, y: false };
		if (browser && ele) {
			isTagListOverflown = isOverflown(ele, opts);
			isTagListScrolled = isScrolled(ele, opts);
			isTagListScrollEnd = isScrollEnd(ele, opts);
		}
	};

	$: checkScroll(tagList);
</script>

<div
	bind:this={tagList}
	on:scroll={() => checkScroll(tagList)}
	class={cx(
		'flex',
		{ 'flex-wrap': !scroll },
		{ 'overflow-x-scroll': scroll },
		'items-center',
		'no-scrollbar',
		isTagListOverflown
			? isTagListScrolled
				? isTagListScrollEnd
					? 'blur-left-edge'
					: 'blur-edge'
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

	.blur-left-edge {
		mask-image: linear-gradient(
			transparent,
			theme('backgroundColor.primary.DEFAULT') 10%,
			100%,
			transparent 100%
		);

		-webkit-mask-image: linear-gradient(
			to right,
			transparent,
			theme('backgroundColor.primary.DEFAULT') 10%,
			100%,
			transparent 100%
		);
	}

	.blur-right-edge {
		mask-image: linear-gradient(
			transparent,
			0%,
			theme('backgroundColor.primary.DEFAULT') 90%,
			transparent 100%
		);

		-webkit-mask-image: linear-gradient(
			to right,
			transparent,
			0%,
			theme('backgroundColor.primary.DEFAULT') 90%,
			transparent 100%
		);
	}
</style>
