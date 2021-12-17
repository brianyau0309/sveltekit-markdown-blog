<script>
	export let className = '';
	export let value = '';
	export let labelText = '';
	export let labelTextSmall = undefined;
	export let textField = undefined;
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
		class={isFocused || value ? 'minimize' : 'show lg:text-lg'}
		on:click={() => textField.focus()}
		>{(isFocused || value) && labelTextSmall !== undefined
			? labelTextSmall
			: labelText}
	</span>
	<input
		class={cx('text-primary-with-dark', 'bg-primary-with-dark', className)}
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
		@apply absolute;
		@apply py-2;
		@apply px-4;
		@apply text-gray-500;
		@apply transition-all;
	}
	span.show {
		@apply pt-3;
		@apply cursor-text;
	}
	span.minimize {
		@apply pt-1.5;
		@apply text-xs;
		@apply cursor-auto;
	}
	input {
		@apply border-gray-700;
		@apply w-full;
		@apply border-2;
		@apply rounded;
		@apply py-2;
		@apply px-4;
		@apply pt-5;
		@apply text-sm;
		@apply leading-tight;
	}
	input:focus {
		@apply border-blue-300;
		@apply outline-none;
	}
</style>
