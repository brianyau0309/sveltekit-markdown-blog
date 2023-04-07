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
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<span
		class={isFocused || value ? 'minimize' : 'show lg:text-lg'}
		on:click={() => textField.focus()}
	>
		{(isFocused || value) && labelTextSmall !== undefined ? labelTextSmall : labelText}
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
		@apply absolute px-4 py-2 text-gray-500 transition-all;
	}
	span.show {
		@apply cursor-text pt-3;
	}
	span.minimize {
		@apply cursor-auto pt-1.5 text-xs;
	}
	input {
		@apply w-full rounded border-2 border-gray-700 px-4 py-2 pt-5 text-sm leading-tight;
	}
	input:focus {
		@apply border-blue-900 outline-none;
	}
</style>
