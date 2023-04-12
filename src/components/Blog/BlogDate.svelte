<script>
	export let lastUpdated;
	export let createdAt;
	import { formatDate } from '$utils';
	import { curry } from '$utils/fp';

	const fd = curry(formatDate)('YYYY-MM-DD', 'MMM DD YYYY');
</script>

<div class={$$props.class ?? ''}>
	<span>{lastUpdated ? 'Last Updated ' : 'Published '}</span>
	<span>
		{lastUpdated ? fd(lastUpdated) : fd(createdAt)}
	</span>
</div>
