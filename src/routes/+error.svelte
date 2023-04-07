<script>
	import { goto } from '$app/navigation';
	import { Button } from '$lib/ui/core/Button';
</script>

<div class="w-full flex-grow py-32 text-center">
	<h1 class="my-8 text-4xl lg:my-16 lg:text-8xl">404 Not Found</h1>
	<Button
		on:click={() => goto('/')}
		className="text-md lg:text-2xl text-secondary-with-dark bg-secondary-with-dark"
		hoverColor="opacity"
	>
		Back to home
	</Button>
</div>
