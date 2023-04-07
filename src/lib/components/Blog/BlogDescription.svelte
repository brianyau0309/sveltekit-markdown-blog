<script>
	export let description = '';
	export let className = '';
	import cx from 'classnames';
	import { Quote } from '$lib/ui/core/Quote';
</script>

<Quote className={cx('my-12', 'md:mx-2', 'lg:text-base', className)} text={description} />
