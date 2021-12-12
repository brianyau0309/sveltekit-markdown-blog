<script>
	export let lastUpdated;
	export let createdAt;
	export let className;
	import { formatDate as fd, curry } from '$utils';

	const formatDate = curry(fd)('YYYY-MM-DD', 'MMM DD YYYY');
</script>

<div class={className}>
	<span>{lastUpdated ? 'Last Updated ' : 'Published '}</span>
	<span>
		{lastUpdated ? formatDate(lastUpdated) : formatDate(createdAt)}
	</span>
</div>
