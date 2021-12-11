<script>
	export let className;
	export let searchQuery = null;
	import { TextBox } from '$lib/ui/core/TextBox';
	import { browser } from '$app/env';

	let textField;

	$: if (browser) {
		const qs = new URLSearchParams(window.location.search);
		const q = qs.get('q');
		if (searchQuery === null && q) searchQuery = q;
		if (searchQuery !== q) {
			if (!searchQuery) qs.delete('q');
			else qs.set('q', searchQuery);
			const query = qs.toString();
			window.history.replaceState(
				window.history.state,
				'',
				`${location.pathname}${query ? `?${query}` : ''}`
			);
		}
	}
</script>

<div class={className}>
	<TextBox
		bind:textField
		bind:value={searchQuery}
		labelText="Search e.g. about category:frontend tag:svelte"
		labelTextSmall="Search"
	/>
</div>
