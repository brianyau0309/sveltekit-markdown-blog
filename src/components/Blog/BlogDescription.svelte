<script>
	export let description = '';
	import { cx } from '$cx';
	import { Quote } from '$lib/ui/core/Quote';
</script>

<Quote class={cx('my-12', 'md:mx-2', 'lg:text-base', $$props.class)} text={description} />
