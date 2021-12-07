<script>
	import cx from 'classnames';
	import { formTitle } from '$lib/utils';
</script>

<nav>
	<ul
		class={cx(
			'flex',
			'justify-between',
			'items-center',
			'text-4xl',
			'text-center',
			'uppercase',
			'font-bold',
			'px-6',
			'py-6'
		)}
	>
		<li><a href="/">{formTitle()?.replace(/\s/g, '')}</a></li>
	</ul>
</nav>
