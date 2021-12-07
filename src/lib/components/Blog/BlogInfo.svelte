<script>
	export let className = '',
		author,
		createdAt,
		lastUpdated;

	import cx from 'classnames';
	import { formatDate as fd, curry } from '$utils';

	const formatDate = curry(fd)('YYYY-MM-DD', 'MMM DD YYYY');
</script>

<div
	class={cx(
		'flex',
		'flex-col',
		'lg:flex-row',
		'justify-between',
		'lg:my-3',
		'px-10',
		'lg:px-24',
		'text-2xl',
		'lg:text-4xl',
		className
	)}
>
	<div>{author ?? ''}</div>
	<div>
		<span>{lastUpdated ? 'Last Updated ' : 'Published '}</span>
		<span>
			{lastUpdated ? formatDate(lastUpdated) : formatDate(createdAt)}
		</span>
	</div>
</div>
