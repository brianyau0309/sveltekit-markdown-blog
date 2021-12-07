<script>
	export let tag,
		className = '';
	import cx from 'classnames';

	const handleClick = (e) => {
		e.stopPropagation();
		console.log(`tags:${tag}`);
	};
</script>

<button
	class={cx(
		'py-1',
		'px-2',
		'border-2',
		'rounded-md',
		'whitespace-nowrap',
		'border-color-primary',
		'hover:bg-color-secondary',
		'hover:text-color-secondary',
		// 'ripple',
		// $darkMode ? 'ripple-dark' : 'ripple-light',
		className
	)}
	on:click={handleClick}
	>#{tag}
</button>

<!-- <style>
	.ripple {
		background-position: center;
		transition: background,color 0.6s;
	}
	.ripple-light:hover {
		background: theme('colors.gray.900')
			radial-gradient(circle, transparent 1%, theme('colors.gray.900') 1%)
			center/15000%;
	}

	.ripple-light:active {
		background-color: theme('colors.gray.100');
		background-size: 100%;
		transition: background,color 0s;
	}

	.ripple-dark:hover {
		background: theme('colors.gray.100')
			radial-gradient(circle, transparent 1%, theme('colors.gray.100') 1%)
			center/15000%;
	}

	.ripple-dark:active {
		background-color: theme('colors.gray.900');
		background-size: 100%;
		transition: background,color 0s;
	}
</style> -->
