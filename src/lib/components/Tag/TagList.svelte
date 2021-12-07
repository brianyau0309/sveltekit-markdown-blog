<script>
	export let tags,
		scroll = true,
		className = '',
		tagClassName = '',
		lBlur = '',
		rBlur = '';
	import cx from 'classnames';
	import { TagButton, TagBlur } from '$components/Tag';
</script>

<div
	class={cx(
		'flex',
		{ 'flex-wrap': !scroll },
		{ 'overflow-x-scroll': scroll },
		'items-center',
		'no-scrollbar',
		className
	)}
>
	{#each tags as tag}
		<TagButton className={tagClassName} {tag} />
	{/each}

	{#if lBlur}
		<TagBlur className={lBlur} />
	{/if}

	{#if rBlur}
		<TagBlur className={rBlur} />
	{/if}
</div>
