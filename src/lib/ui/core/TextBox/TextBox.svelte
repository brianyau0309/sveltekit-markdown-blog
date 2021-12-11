<script>
	export let className = '';
	export let value = '';
	export let labelText = '';
	export let labelTextSmall = undefined;
	export let textField;
	import cx from 'classnames';

	let isFocused;
</script>

<div>
	<span
		class={cx(
			'absolute',
			'py-2',
			'px-4',
			'text-gray-500',
			'transition-all',
			isFocused || value
				? cx('pt-1.5', 'text-xs', 'cursor-auto')
				: cx('pt-3', 'text-lg', 'cursor-text')
		)}
		on:click={() => textField.focus()}
		>{(isFocused || value) && labelTextSmall !== undefined
			? labelTextSmall
			: labelText}
	</span>
	<input
		class={cx(
			'text-pcolor',
			'bg-pcolor',
			'border-gray-700',
			'focus:border-blue-300',
			'w-full',
			'border-2',
			'focus:outline-none',
			'rounded',
			'pt-5',
			'py-2',
			'px-4',
			'leading-tight',
			className
		)}
		type="text"
		on:focus={() => (isFocused = true)}
		on:blur={() => (isFocused = false)}
		bind:value={value}
		bind:this={textField}
	/>
</div>
