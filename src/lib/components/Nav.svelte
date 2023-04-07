<script>
	import { formTitle } from '$lib/utils';
</script>

<nav>
	<ul>
		<li>
			<a href="/">{formTitle()?.replace(/\s/g, '')}</a>
		</li>
	</ul>
</nav>

<style type="postcss">
	ul {
		@apply flex items-center justify-between px-6 py-6 text-center text-4xl font-bold uppercase;
	}
</style>
