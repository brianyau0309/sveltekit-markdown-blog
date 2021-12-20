<script>
	export let description = '';
	export let className = '';
	import cx from 'classnames';
	import { Quote } from '$lib/ui/core/Quote';
</script>

<Quote
	className={cx('mt-2', 'mb-10', 'lg:text-base', className)}
	text={description}
/>
