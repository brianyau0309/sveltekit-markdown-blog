<script>
	export let tags;
	export let scroll = true;
	export let className = '';
	export let tagClassName = '';
	import cx from 'classnames';
	import { TagButton } from '$components/Tag';
	import { isOverflown, isScrolled, isScrollEnd } from '$utils/dom';
	import { browser } from '$app/env';

	let tagList;
	let blurClass;

	const checkScroll = (ele) => {
		if (!(browser && ele)) return;
		const opts = { x: true, y: false };
		if (isOverflown(ele, opts)) {
			if (isScrollEnd(ele, opts)) {
				blurClass = 'blur-left-edge';
			} else if (isScrolled(ele, opts)) {
				blurClass = 'blur-edge';
			} else {
				blurClass = 'blur-right-edge';
			}
		} else {
			blurClass = '';
		}
	};

	$: checkScroll(tagList);
</script>

<div
	bind:this={tagList}
	on:scroll={() => checkScroll(tagList)}
	class={cx(
		'flex',
		scroll ? 'overflow-x-scroll' : 'flex-wrap',
		'items-center',
		'no-scrollbar',
		blurClass,
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
