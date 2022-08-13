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
		@apply flex justify-between items-center text-4xl text-center uppercase font-bold px-6 py-6;
	}
</style>
