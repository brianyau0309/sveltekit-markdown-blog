<script>
	import { TextBox } from '$lib/ui/core/TextBox';
	import { searchQuery } from '$stores';
	let textField;
</script>

<div class={$$props.class}>
	<TextBox
		bind:textField
		bind:value={$searchQuery}
		labelText="Search e.g. category:frontend"
		labelTextSmall="Search"
		debounceTimeout={500}
	/>
</div>
