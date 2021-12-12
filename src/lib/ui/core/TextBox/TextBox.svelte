<script>
	export let className = '';
	export let value = '';
	export let labelText = '';
	export let labelTextSmall = undefined;
	export let textField;
	export let debounceTimeout = 0;
	import cx from 'classnames';

	let isFocused;
	let timer;
	const debounce = (v) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			value = v;
		}, debounceTimeout);
	};
</script>

<div>
	<span
		class={isFocused || value ? 'minimize' : 'show'}
		on:click={() => textField.focus()}
		>{(isFocused || value) && labelTextSmall !== undefined
			? labelTextSmall
			: labelText}
	</span>
	<input
		class={cx('text-pcolor', 'bg-pcolor', className)}
		type="text"
		on:focus={() => (isFocused = true)}
		on:blur={() => (isFocused = false)}
		on:input={(e) => debounce(e.target.value)}
		{value}
		bind:this={textField}
	/>
</div>

<style type="postcss">
	span {
		@apply absolute py-2 px-4 text-gray-500 transition-all;
	}
	span.show {
		@apply pt-3 lg:text-lg cursor-text;
	}
	span.minimize {
		@apply pt-1.5 text-xs cursor-auto;
	}
	input {
		@apply border-gray-700 w-full border-2 rounded py-2 px-4 pt-5 text-sm leading-tight;
	}

	input:focus {
		@apply border-blue-300 outline-none;
	}
</style>
